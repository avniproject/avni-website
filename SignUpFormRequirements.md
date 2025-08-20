## Signup n8n workflow trigger request info
curl -X POST https://avniproject.app.n8n.cloud/webhook/avni-signup \
  -H "Content-Type: application/json" \
  -d '{
  "q3_name": "Vinay 1a2r",
  "q4_email": "vinayv@samanvayfoundation.org",
  "q5_phone": "9741083755",
  "q6_organisationName": "N8N va2test Organization",
  "q7_type": "Government",
  "q8_additionalMessage": "va2Testing the workflow"
}'


## Signup Form : Fields

- Full Name | Mandatory 

- Professional Email | Mandatory | 
Email format verification (contains @, . , invalid characters etc. )
Typo checks like (@gmil, @yaho etc)
Domain name checks to avoid disposable emails (eg. mailinator.com, 10minutemail.com)
Duplicate emails validation (not allowing  john.doe+test@gmail.com )
Role-based Email Block (admin@, info@ etc. )

- Phone number | Mandatory 
Accept number with country ID - auto fill India +91  

- Organisation Name | Mandatory

- Type of Organisation | Options: NGO, Government., Personal, Others(if others, please specify)

- Sector |  Mandatory | Options: Health, Education, Water, Livelihood etc. 
Accessibility/Disability
Animals, Nature, Water and Earth
Arts, Culture, and Humanities
Civic Engagement, Civil Rights, and Justice
Disaster Relief / Emergency Response
Economic Development & Poverty Alleviation
Education
Employment / Placement
Environment & Climate Action
Financial Literacy & Workforce Development
Food & Nutrition
Gender Equality
Health (Hygiene, Mental, Physical)
Homelessness & Housing
LGBTQ+
Military/Veterans
Philanthropy, Grantmaking, and Volunteerism
Religion
Science, Technology, Engineer, Mathematics (STEM)
Sports & Recreation
Youth
Other
*If other, please describe.

- What do you want to use Avni for? (Additional Message)

## Security

- Captcha to prevent spam
- cookies to prevent multiple submissions
- auto-fill detection to prevent bots
- validation to prevent disposable emails
- validation on phone number to prevent invalid numbers
- validation on Full name to prevent invalid characters or empty
- validation on organisation name to prevent invalid characters or empty

## Requirements

- Replace <form onSubmit={this.submitForm} method="post" action="https://formspree.io/xzbjebyr">
- Refer https://form.jotform.com/252242414043444 for styling and functionality.
- Keep the signup more intune with current website design and functionality.

## Sales and Marketing Requirements

- Add Terms and Conditions  and Privacy Policy checkbox below the form
- Add checkbox to subscribe to Marketing and Updates from Avni
- Allow  signup to be submitted only if the Terms and Conditions and Privacy Policy checkbox is checked
- Add a field to capture the source of the signup [Social Media, Website, Referral, Other]
- Show sucess / error message based on the response from the n8n workflow
