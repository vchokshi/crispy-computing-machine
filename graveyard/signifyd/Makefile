download:
	curl -Ss -L https://cdn-scripts.signifyd.com/api/company_toolkit.js > company_toolkit.js
	curl -Ss -L https://cdn-scripts.signifyd.com/api/script-tag.js > script-tag.js
	sed -i '1i\# Open Source code imported for use by author. Use make to update per Apache 2.0' company_toolkit.js
	sed -i '1i\# Open Source code imported for use by author. Use make to update per Apache 2.0' script-tag.js
	md5sum *.js > checksums.txt
	sha256sum *.js >> checksums.txt
