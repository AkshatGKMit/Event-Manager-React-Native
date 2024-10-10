# Core Functionality

-   **Authentication Screen**

    -   Signup Collect appropriate user details such as name, email, gender, age, username, and password. Store these details in local storage for persistence.
    -   Login Use email and password for user login. Validate login credentials aginst those stored in local storage.
    -   On successful login, navigate to the Dashboard.
    -   Ensure proper validation for both sign-up and login forms.

-   **Dashboard Screen**

    -   Display a summary of upcoming events and total attendees.
    -   Handle data using local storage.

-   **Add/Edit Event Screen**

    -   Create a form for adding and editing events.
    -   Ensure form validations for required fields (e.g., title, date).
    -   Save event data in local storage.

-   **Event List Screen**

    -   Show a list of upcoming events with options to edit or delete events.
    -   Implement filtering and search functionality.

-   **Attendee Management Screen**

    -   Add, edit, and remove attendees for each event.
    -   Ensure attendee count doesn't exceed the event limit.

-   **Profile Screen**

    -   Create a profile screen and Include a Settings button inside the profile screen that navigates to the Settings Screen.
    -   Include a Logout button in the profile screen, which clears the user session and navigates back to the Authentication Screen.

-   **Settings Screen**

    -   Provide options to reset data, customize event filters, and choose date/time formats.

-   **Bottom Tabs**

    -   Implement bottom tab navigation to switch between Dashboard, Event List, Profile, and other key screens.

<br/>
<br/>
<br/>

# How To Do?

-   **Auth screen Implementation**

    -   To handle multile user login create a storage key of `loginedUserId` so when a user login this id must be filled with that uer id
    -   If user logout then clear that id
    -   Handle routes accordingly - If `loginedUserId` is present then go to dashboard else go to Auth screen

-   **Add step indicator in event list date**

    -   Passed date events steps should be in filled colored
    -   Current date events step should be in outlined color
    -   Upcoming events date should be in grey color
    -   Current date should be shown in event list event it no events are there

-   **Two events cannot have same venue at same time**

<br/>
<br/>
<br/>

# Optional Functionality

-   **Forgot Password Screen**
-   **Avatar in user profile**
-   **Add App logo**
-   **Add splash screen**
-   **Add an admin account which can change venue**
-   **Push notification when user added in an event**
