# Imaginfy: Image Manipulation and Enhancement Tool

Imaginfy is a versatile image processing tool built using 
### Next.js, Tailwind CSS, MongoDB, Stripe, Clerk, and Cloudinary.
It empowers users to perform various image transformations, enhancements, and optimizations. Whether you need to restore old photos, remove backgrounds, or extend canvas size, Imaginfy has got you covered!

Features
- Image Restoration:
Revive faded or damaged images by applying filters and adjustments.
Remove scratches, dust, and blemishes.
Enhance contrast and sharpness.
- Object Removal:
Easily erase unwanted objects or people from your photos.
- Seamlessly blend the background to fill the gaps.
- Background Removal:
Extract foreground objects from their backgrounds.
Perfect for creating transparent PNGs or isolating subjects.
- Canvas Extension:
Extend the canvas size of an image.
Ideal for adding extra space around your artwork.
- Image Optimization:
Compress and optimize images for faster loading.
Seamlessly integrate with Cloudinary for efficient storage and delivery.

### Getting Started
Installation:
```
Clone this repository: git clone https://github.com/yourusername/imaginfy.git
```

```
Install dependencies: npm install
```
- Environment Variables:
Create a .env.local file and set the following variables:
```
NEXT_PUBLIC_SERVER_URL=
MONGODB_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```
### Run Locally:
Start the development server:
``` 
npm run dev
```
- Access the app at http://localhost:3000
- Deployment:
Deploy your app on Vercel or any other hosting platform.
- Set up environment variables in your deployment settings.
- Contributing
Contributions are welcome! If you find any issues or have ideas for improvements, feel free to open a pull request.

