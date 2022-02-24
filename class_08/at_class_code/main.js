// 1. Respond to the submit event on the form (cover events, callbacks)
// 2. Get the user input
// 3. Validate user input
//    Validations to add
//    - First and last name must be at least 2 characters
//    - Phone number must be valid length (10) and numbers only
//    - Course must be selected (you might want to have a look at `required` attribute of form inputs)
//    - Past experience should be at least 50 characters
// 4. When validation fails
//    - add `li` element with validation text to `ul#errors` element (refresh on DOM nodes)
//    - add `aria-invalid="true"` to the invalid fields
