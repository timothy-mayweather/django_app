from inertia import render


def home(request):
    return render(request, 'Events/Index', props={
        'events': ['Django Conference', 'Inertia Bootcamp', 'Python Meetup']
    })

