Goal
Block the submit if the form is empty and display the created link.

To do
1. Transform the component into a class
2. Listen the submit event of the form ( help)
3. Prevent the refresh of the page with{" "} PreventDefault() {" "} (help)
4. Keep the value of filename, expiration &{" "} code in the state
5. On submit, check if any property of the state (filename,{" "} expiration & code) is empty, if not submit the form
6. If one element is empty, display a message
7. Replace ~~~~ by the generated link given by the API
On this exercise, you can use{" "} Fetch {" "} or Axios.

You can find the API documentation here:{" "} https://pastebin.com/api