#!/bin/bash

# Build the app
echo "Building the app..."
npm run build

# Create or checkout gh-pages branch
echo "Preparing gh-pages branch..."
git checkout -B gh-pages

# Copy dist files to root
echo "Copying build files..."
cp -r dist/spa/* .

# Add and commit changes
echo "Committing changes..."
git add .
git commit -m "Deploy to GitHub Pages"

# Push to GitHub
echo "Pushing to GitHub..."
git push -f origin gh-pages

# Return to original branch
echo "Returning to main branch..."
git checkout main

echo "Deployment complete!"