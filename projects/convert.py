import markdown

with open('project.md', 'r') as f:
    text = f.read()
    html = markdown.markdown(text)

with open('project.html', 'w') as f:
    f.write(html)