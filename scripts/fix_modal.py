import re

def update_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    modal_html = '''
<div class="video-modal" id="videoModal">
    <div class="video-modal-content">
        <span class="video-modal-close" onclick="window.closeVideoModal()">&times;</span>
        <iframe id="videoModalFrame" src="" allowfullscreen></iframe>
    </div>
</div>'''

    for mod_id in ['2', '3', '4', '5']:
        # We need to find the closing </div> of the video-grid, then the backtick
        # Let's find `<div class="video-grid">...</div>`
        pattern = r'(id:\s*"fix-' + mod_id + r'",[\s\S]*?<div class="video-grid">[\s\S]*?</div>)(`)'
        
        match = re.search(pattern, content)
        if match:
            # check if modal is already there
            if '<div class="video-modal" id="videoModal">' not in match.group(1):
                # append modal_html before the backtick
                new_text = match.group(1) + modal_html + match.group(2)
                content = content[:match.start()] + new_text + content[match.end():]

    with open(filename, 'w', encoding='utf-8') as file:
        file.write(content)

update_file('public/assets/js/curso-basico.js')
update_file('extracted_data.js')
