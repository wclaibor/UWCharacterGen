# Create image based on the official Node image from dockerhub
FROM node:lts

# Create a directory where our app will be placed
RUN mkdir -p /app

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy dependency definitions
COPY package.json yarn.lock ./
# Install dependecies
RUN yarn
# Expose the port the app runs in
EXPOSE 4200 49153
# Serve the app
CMD ["yarn", "start"]
