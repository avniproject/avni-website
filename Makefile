
start:
	npm run develop

deps:
	npm i

clean:
	rm -rf node_modules

# Convert video (.mov/.mp4) to optimized GIF
# Usage: make video-to-gif INPUT=path/to/video.mov OUTPUT=output.gif
# Requires: brew install ffmpeg gifsicle
# Reference: https://gist.github.com/SheldonWangRJT/8d3f44a35c8d1386a396b9b49b43c385
video-to-gif:
	ffmpeg -i $(INPUT) -pix_fmt rgb8 -r 10 $(OUTPUT) && gifsicle -O3 $(OUTPUT) -o $(OUTPUT)
