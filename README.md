# 03 JavaScript: Password Generator

This assignment was to create an application that generates a random password based on user-selected criteria.

This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.


Acceptance Criteria:
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

In the future, I would like to reset the variables so that with each button press I can generate a new password without adding on to the old one or needing to refresh the page.

Although, it's interesting, I believe it's adding to the old one and reshuffling it.  So that was an unintended bonus.

The process goes like this:
1. Button press -> Prompts for character needs, once fulfilled the prompt for the length desired takes in a number >= 8 and <= 128.

2. Based on the user's character choices, an array of methods is created made up of generators that generate one character at a time.

3. In order to get at least one type of each chosen generator, we first update a string in a for loop with one of each desired type.

4. Then a loop generates the rest of the required length of the requested password, updating password as it goes.

5. In order for the begining of the password not to be predictable we need to shuffle the string.

6. We split it into an array, shuffle, and join it back to a string.

7. We update the textarea of the tag with id = password to display our generated password in the textbox.

Did I make this too complicated?  Almost definitely.

Am I submitting this down to the wire?  Also, yes.

But I have not thrown my laptop across the room.  And I can only hope my solution was at least novel.






















