<h3>
This is a template web app for django inertia apps using react
</h3>

````
clone this repository
remove .git directory
rename django_app to your desired app name (this includes all directory names and text in files named so)
rename Django_app to your desired app name in settings.py and main.jsx
after coding your application, run 
$ npm run build
$ python manage.py collectstatic
change DJANGO_VITE_DEV_MODE = DEBUG to DJANGO_VITE_DEV_MODE = False in settings.py
Finally, Deploy to your python server
````