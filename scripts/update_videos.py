import re

def update_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # The modal HTML that was missing
    modal_html = '''
<div class="video-modal" id="videoModal">
    <div class="video-modal-content">
        <span class="video-modal-close" onclick="window.closeVideoModal()">&times;</span>
        <iframe id="videoModalFrame" src="" allowfullscreen></iframe>
    </div>
</div>'''

    for mod_id in ['2', '3', '4', '5']:
        # Find all lessons in this module to get video IDs
        mod_match = re.search(r'id:\s*' + mod_id + r',\s*title:\s*"Módulo.*?lessons:\s*\[([\s\S]*?)\n\s*\]\n\s*}', content)
        if not mod_match: continue
        mod_block = mod_match.group(1)
        
        lessons = list(re.finditer(r'id:\s*"(?:' + mod_id + r'-\d+)",\s*title:\s*"([^"]+)",[\s\S]*?videoUrl:\s*"([^"]*)"', mod_block))
        
        grid_html = '<div class="video-grid">\n'
        for i, lesson in enumerate(lessons):
            title = lesson.group(1)
            video_url = lesson.group(2)
            vid = ""
            if "embed/" in video_url:
                vid = video_url.split("embed/")[-1].split("?")[0]
            if not vid:
                vid = "o1FiPSv60aY"
                
            aula_num = f"Aula {i+1}"
            grid_html += f'    <img src="https://img.youtube.com/vi/{vid}/mqdefault.jpg" class="video-thumb" title="{aula_num}" onclick="window.openVideoModal(\\\'https://www.youtube.com/embed/{vid}?autoplay=1\\\')">\n'
        grid_html += '</div>'
        
        grid_and_modal = grid_html + modal_html

        # Replace the video-grid in the fix-X block
        # Because we might have or not have the modal already, let's match from video-grid to the end of the backtick
        fix_pattern = r'(id:\s*"fix-' + mod_id + r'",[\s\S]*?content:\s*`[\s\S]*?)<div class="video-grid">[\s\S]*?`'
        
        fix_match = re.search(fix_pattern, content)
        if fix_match:
            # Reconstruct content
            # fix_match.group(1) contains everything before <div class="video-grid">
            content = content[:fix_match.start()] + fix_match.group(1) + grid_and_modal.replace("\\'", "'") + "`" + content[fix_match.end():]

    with open(filename, 'w', encoding='utf-8') as file:
        file.write(content)

update_file('public/assets/js/curso-basico.js')
update_file('extracted_data.js')
