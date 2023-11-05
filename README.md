<h3>
This is a template web app for django inertia apps using react
</h3>

````
** Note: use pip or pip3, python or python3
clone this repository
remove .git directory
rename django_app to your desired app name (this includes all directory names and text in files named so)
rename Django_app to your desired app name in settings.py and main.jsx
run below for development phase
--initially
$ python -m venv .venv
$ source .venv/bin/activate
$ pip install -r requirements.txt
$ npm install
--change the app security key
$ python manage.py shell
>>> from django.core.management.utils import get_random_secret_key
>>> print(get_random_secret_key())
copy and paste the key to replace the security key in settings.py
---during
$ python manage.py runserver
$ npm run dev
after coding your application, run 
$ npm run build
change DJANGO_VITE_DEV_MODE = DEBUG to DJANGO_VITE_DEV_MODE = False in settings.py
you can now remove the node_modules directory
Finally, Deploy to your python server
````
