# rm -R -f ./migrations &&
# pipenv run init &&
# psql -U gitpod -c 'DROP DATABASE example;' || true &&
# psql -U gitpod -c 'CREATE DATABASE example;' &&
# psql -U gitpod -c 'CREATE EXTENSION unaccent;' -d example &&
# pipenv run migrate &&
# pipenv run upgrade


#/bin/bash
​
echo "------ RESET MIGRATIONS PROCESS -------"
rm -rf migrations
psql -U gitpod -c 'DROP DATABASE example;' 
psql -U gitpod -c 'CREATE DATABASE example;' 
psql -U gitpod -c 'CREATE EXTENSION unaccent;' -d example
pipenv run init
pipenv run migrate
pipenv run upgrade
pipenv run start
​
echo "-------- SUCCESS --------"