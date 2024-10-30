# Certificates Filtering Component

Certificate display component with filtering functionality built in React. Users can filter certificates based on different categories, providing a clean and interactive experience. This README will walk you through the components and their usage.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [App](#app)
  - [Certs](#certs)
  - [Cert](#cert)
- [Filtering Logic](#filtering-logic)
- [Styling](#styling)
- [Prop Types](#prop-types)

## Overview

The project consists of a set of components designed to display a list of certificates with the ability to filter them by category. Users can choose different categories to narrow down the list or view all certificates at once.

## Installation

To run this project locally:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## Usage

The app displays a list of certificates and provides buttons to filter them by category. The filtering is done using React's state management, allowing for an interactive and responsive user experience.

## Components

### App

The `App` component is the main entry point of the project. It manages the state of certificates (`certs` and `filteredCerts`) and handles loading states. It also contains the filtering logic and passes down relevant props to the `Certs` component.

#### Key Responsibilities

- Manages the loading state.
- Manages the complete list of certificates and the filtered list.
- Generates the list of unique categories for filtering.

### Certs

The `Certs` component is responsible for displaying the list of certificates and the filtering buttons.

#### Props

- `certs` (array): The list of certificates to display.
- `categories` (array): The available categories for filtering.
- `filterItems` (function): Function to handle filtering of certificates based on the selected category.

#### Key Responsibilities

- Renders filter buttons for each category.
- Renders the `Cert` component for each certificate in the filtered list.

### Cert

The `Cert` component is responsible for displaying individual certificate details such as the image, name, date, and additional information.

#### Props

- `id` (string/number): Unique identifier for the certificate.
- `image` (string): URL for the certificate image.
- `info` (string): Description of the certificate.
- `name` (string): Certificate name.
- `date` (string): Date of the certificate.

#### Features

- **Read More/Show Less**: The `Cert` component has a "Read More" toggle for lengthy descriptions.

## Filtering Logic

The filtering is implemented in the `App` component. It extracts unique categories from the certificate data and adds an "all" category to allow users to reset the filter.

```jsx
const allCategories = ['all', ...new Set(certificateData.map((cert) => cert.category))];

const filterItems = (category) => {
  if (category === 'all') {
    setFilteredCerts(certificateData);
  } else {
    const newItems = certificateData.filter((cert) => cert.category === category);
    setFilteredCerts(newItems);
  }
};
```

## Styling

- **Button Styles**: Buttons are styled using the class `.filter-btn`.
- **Container Styles**: Components are styled using CSS classes such as `.btn-container`, `.certs`, `.single-cert`, etc.
- **CSS Framework**: The styles can be customized using CSS or a preferred styling library.

## Prop Types

PropTypes are used to ensure the components receive the correct props, helping to catch bugs early during development.

Example for `Cert` Component:

```jsx
Cert.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
```

## License

This project is open-source and available under the MIT License.

## Contributing

[![Netlify Status](https://api.netlify.com/api/v1/badges/bee08f78-9ff1-4b04-b020-6a66e14c584c/deploy-status)](https://app.netlify.com/sites/g-certs/deploys)
