
FROM node:20-alpine as build-step

ENV NODE_OPTIONS="--max-old-space-size=5096"

RUN mkdir -p /app
RUN chmod -R 755 /app

WORKDIR /app

COPY package.json /app

#RUN npm install 

COPY . /app

RUN npm run build 

#-------- 
FROM ubuntu:20.04

RUN apt update && apt install -y nginx
RUN apt install -y nano
CMD ["nginx", "-g", "daemon off;"]

COPY --from=build-step /app/dist/sakai-ng /var/www/html

COPY  /sites_available/default /etc/nginx/sites-available/default

RUN chmod -R 755 /var/www/html 
 
RUN chmod -R 755 /etc/nginx/sites-available

EXPOSE 80

