
all: ../style.css \
	 ../index.html \
     ../posts/assert.html \
     ../posts/endianess.html \
     ../posts/serv-http-0-9.html \
     ../posts/serv-tcp.html

../%.html: pages/%.html
	c2html -i $< -o $@ -t

../posts/%.html: pages/posts/%.html
	c2html -i $< -o $@ -t

../%.css: pages/%.css
	cp $< $@