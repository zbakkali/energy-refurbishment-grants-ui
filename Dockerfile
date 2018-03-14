FROM nginx:1.13.9-alpine
COPY static/ /usr/share/nginx/html/
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
