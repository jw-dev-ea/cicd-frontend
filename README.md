# CI/CD Frontend

### Start the backend Docker container
```bash
docker run -p 3000:3000 jonathanwengel/cicd-backend:latest
```

### Build and test the Docker image locally
```bash
docker build -t cicd-frontend .
docker run -p 80:80 cicd-frontend
```

### Start both services
```bash
docker-compose up
```