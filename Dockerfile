FROM node:10.15.0-alpine
# File Author / Maintainer
LABEL authors="murunwas@yahoo.com"

# Update & install required packages
RUN apk add --update nodejs bash git

# Install app dependencies
COPY package.json /www/package.json
RUN cd /www; npm install

# Copy app source
COPY . /www

RUN ["npm", "build"]
# EXPOSE 3000

# Set work directory to /www
WORKDIR /www

CMD ["npm",  "start", gunicorn --bind 0.0.0.0:$PORT wsgi ]


