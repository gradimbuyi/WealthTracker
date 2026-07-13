# HTTPs Setup

This document serves as guide to generate HTTPs certificate. 

**Install Certbot**
```
sudo apt update
sudo apt install certbot -y
```
**Stop the frontend container**
```
docker compose -f docker-compose.prod.yml stop w-frontend
```
**Generate the certificate**
```
sudo certbot -certonly --standalone \
    -d ${domain_name}.com \
    -d $ww.{domain_name}.com
```

**Mount the certificates** (to frontend container):
```
volumes: 
    - /etc/letsencrypt:/etc/letsencrypt:ro
```

**Restart the application**

```
docker compose -f docker-compose.prod.yml up -d
```

**Renew the certificate**

```
sudo certbot renew docker compose -f docker-compose.prod.yml restart w-frontend
```