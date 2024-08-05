
# Mail Service Web App

This project is a functional web app built using Vite, React, Redux, and Tailwind CSS, based on the provided designs and APIs. The app includes features such as login, data fetching, keyboard shortcuts, a custom text editor, and light/dark mode.

## Features

1. **Login Page**: Implements the design provided for the login page.
2. **Onebox Screen**: Redirects to the onebox screen (`/google-login`) upon successful login.
3. **Data Fetching in Onebox**: 
   - Fetch the list of threads using `/onebox/list` (GET)
   - Fetch individual thread details using `/onebox/:thread_id` (GET)
   - Delete a thread using `/onebox/:thread_id` (DELETE)
4. **Keyboard Shortcuts in Onebox**: 
   - Pressing "D" deletes the selected thread.
   - Pressing "R" opens the reply box.
5. **Custom Text Editor**: Includes custom buttons like “SAVE” and “Variables”.
6. **Reply Functionality**: 
   - Sends a reply via the API endpoint `POST /reply/:thread_id` with the required data structure.
7. **Light and Dark Mode**: Implements both light and dark modes.

## Technologies Used

- **Vite**: For fast and optimized development.
- **React**: As the JavaScript library for building user interfaces.
- **Tailwind CSS**: For utility-first CSS styling.
- **Redux**: For state management.


## Installation and Setup

1. **Clone the repository**:
   ```sh
   git clone git@github.com:Pritish-Sinha/mail-service.git
   cd mail-service
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Run the development server**:
   ```sh
   npm run dev
   ```

4. **Build for production**:
   ```sh
   npm run build
   ```

5. **Preview the production build**:
   ```sh
   npm run preview
   ```

## API Endpoints

- **Fetch Onebox List**: 
  - Method: `GET`
  - Endpoint: `/onebox/list`

- **Fetch Thread Details**: 
  - Method: `GET`
  - Endpoint: `/onebox/:thread_id`

- **Delete Thread**: 
  - Method: `DELETE`
  - Endpoint: `/onebox/:thread_id`

- **Send Reply**: 
  - Method: `POST`
  - Endpoint: `/reply/:thread_id`
  - Payload:
    ```json
    {
      "from": "email",
      "to": "email",
      "subject": "",
      "body": "<html></html>"
    }
    ```

## Custom Text Editor

The custom text editor includes additional buttons like “SAVE” and “Variables” to enhance the user experience.

## Keyboard Shortcuts

- **Delete Thread**: Press "D" to delete the selected thread.
- **Open Reply Box**: Press "R" to open the reply box.

## Light and Dark Mode

The app supports both light and dark modes. Users can switch between these modes as per their preference.

## Demo

- **Video Demo**: [Loom](#) <!-- Add your loom link here -->
- **Live Demo**: [Vercel](#) <!-- Add your live demo link here -->
