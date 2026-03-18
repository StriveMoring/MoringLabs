import urllib.request
import re
import os

css_url = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36'}

req = urllib.request.Request(css_url, headers=headers)
with urllib.request.urlopen(req) as response:
    css_content = response.read().decode('utf-8')

urls = set(re.findall(r'url\((.*?)\)', css_content))
os.makedirs('assets/webfonts', exist_ok=True)
os.makedirs('assets/css', exist_ok=True)

for url in urls:
    font_url = url.strip().strip("'\"")
    if font_url.startswith('https://'):
        font_name = font_url.split('/')[-1]
        try:
            urllib.request.urlretrieve(font_url, f'assets/webfonts/{font_name}')
            css_content = css_content.replace(url, f"'/assets/webfonts/{font_name}'")
        except Exception as e:
            print(f"Failed to download {font_url}: {e}")

with open('assets/css/inter.css', 'w') as f:
    f.write(css_content)

print("Fonts downloaded successfully.")
