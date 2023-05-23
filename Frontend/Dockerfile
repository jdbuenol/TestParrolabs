FROM node:18.16.0
COPY . /var/www/html
WORKDIR /var/www/html
RUN npm install
RUN npm install -g @angular/cli
RUN npm run build