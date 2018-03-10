# Create image based on the official Node 6 image from dockerhub
FROM node:9-alpine

# Create a directory where our app will be placed
RUN mkdir -p /usr

# Change directory so that our commands run inside this new directory
WORKDIR /usr

# Copy dependency definitions
COPY package.json /usr
# Copy ts configuration file needed to run via ng serve
COPY tsconfig.json /usr
# 
COPY .angular-cli.json /usr

# Get all the code needed to run the app
COPY src /usr/src

# Install dependecies
RUN npm install

#Build angular app
RUN npm build

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]