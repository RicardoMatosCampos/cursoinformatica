import re

def update_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    style_html = '''<style>
.video-grid { display: flex; gap: 12px; overflow-x: auto; padding-bottom: 12px; margin-bottom: 20px; scrollbar-width: thin; scrollbar-color: var(--accent-color) var(--bg-hover); }
.video-grid::-webkit-scrollbar { height: 8px; }
.video-grid::-webkit-scrollbar-track { background: var(--bg-hover); border-radius: 4px; }
.video-grid::-webkit-scrollbar-thumb { background: var(--accent-color); border-radius: 4px; }
.video-thumb { cursor: pointer; width: 160px; height: 90px; border-radius: 8px; border: 2px solid transparent; object-fit: cover; transition: 0.2s; flex-shrink: 0; }
.video-thumb:hover { border-color: var(--accent-color); transform: scale(1.05); }
.video-modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 9999; justify-content: center; align-items: center; }
.video-modal.active { display: flex; }
.video-modal-content { width: 90%; max-width: 900px; aspect-ratio: 16/9; position: relative; }
.video-modal-close { position: absolute; top: -40px; right: 0; color: white; font-size: 35px; cursor: pointer; }
.video-modal iframe { width: 100%; height: 100%; border: none; border-radius: 8px; }
</style>
'''

    for mod_id in ['2', '3', '4', '5']:
        # Match `<div class="video-grid">` inside `fix-mod_id`
        # and ensure we aren't duplicating the style tag
        fix_pattern = r'(id:\s*"fix-' + mod_id + r'",[\s\S]*?)(<div class="video-grid">)'
        
        fix_match = re.search(fix_pattern, content)
        if fix_match:
            # Check if `<style>` already exists before `<div class="video-grid">`
            prefix = fix_match.group(1)
            if "<style>" not in prefix:
                content = content[:fix_match.start(2)] + style_html + content[fix_match.start(2):]

    with open(filename, 'w', encoding='utf-8') as file:
        file.write(content)

update_file('public/assets/js/curso-basico.js')
update_file('extracted_data.js')
