git fetch
git pull
docker stop wsp-assignment-3
docker rm wsp-assignment-3
cd C:\Users\Administrator\Documents\GitHub\WSP-Assignment-3\WSP-Assignment-3
docker build -t wsp-assignment-3 .
docker run -d -p 1447:4000 --name wsp-assignment-3 wsp-assignment-3:latest