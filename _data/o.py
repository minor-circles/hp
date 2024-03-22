import requests 

drive_url='https://drive.google.com/open?id=1rwvznsKKdlLXQkeEy6QL8RiqxxIs47eH'
id=drive_url.split('=')[-1]

#image url
url=f'https://drive.usercontent.google.com/u/0/uc?id={id}&export=download'
#save image
r = requests.get(url, allow_redirects=True)
open('icon.png', 'wb').write(r.content)