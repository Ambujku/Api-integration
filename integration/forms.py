from django import forms

class NameForm(forms.Form):

    email = forms.EmailField(widget=forms.TextInput(attrs=dict(required=True, max_length=30)), label=("Email address"))
    phone_no = forms.CharField(max_length=12)
    password = forms.CharField(widget=forms.PasswordInput(attrs=dict(required=True, max_length=30, render_value=False)), label=("Password"))
    email_status = forms.BooleanField()
    phone_status = forms.BooleanField()
    date_of_birth = forms.DateField()