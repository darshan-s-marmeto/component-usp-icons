# USP ICONS Component

The USP (Unique Selling Proposition) Icons Component is designed to enhance your Shopify storefront by showcasing key selling points with customizable icons. This component is especially useful for highlighting features such as free shipping, return policies, customer support, and other unique selling points. It is optimized for mobile devices, ensuring a seamless user experience.

## Features

 - **Responsive Design**: Slider functionality is specifically applied for mobile devices, ensuring an optimal user experience on smaller screens.
 - **Toggle Pagination Dots**: Option to show or hide slider dots for navigation.
 - **Toggle Pagination Arrows**: Option to enable or disable navigation arrows.
 - **Autoplay Feature**: Option to enable autoplay with customizable intervals.

## Dependencies

 - **Splide JS**: A lightweight and flexible slider library.https://splidejs.com/


## Implementation Steps

 - ### Step 1: 
   Create a file with name usp-icons.liquid under **Sections**. Copy the code from USP-Icons.liquid and paste it in the ups-icons.liquid file.
  - ### Step 2:
    Create usp-icons.css under **Assets**. Copy the code from USP-Icons.css and paste it in the usp-icons.css file.
  - ### Step 3: 
	 Create usp-icons.js under **Assets**. Copy the code from USP-Icons.js and paste it in the usp-icons.js file.
  - ### Step 4:
    Add the following CDN links in your theme.liquid file within the <head> tag if not already included:

    `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Splide/3.6.9/splide.min.css"/>`
    
    `<script src="https://cdnjs.cloudflare.com/ajax/libs/Splide/3.6.9/splide.min.js"></script>`


# Important Notes

>  - The component employs its own styling. For further optimization, consider using the classes provided by the
> theme.
>  - The component utilizes the splide.js slider. If your theme already includes a different slider library, you should consider using that to
> maintain consistency.
