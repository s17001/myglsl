precision mediump float;
uniform float time;
uniform vec2 resolution;
uniform sampler2D backbuffer;
uniform vec2 mouse;
void main() {
	vec2 p = (gl_FragCoord.xy * 2. - resolution) / min(resolution.x, resolution.y);
	vec3 cam = vec3(time, sin(time/2.0), -6.5);
	vec3 cur = cam;
	vec3 ray = normalize(vec3(p, 1.0));
	float naka = sin( ( ((p.x * p.x )+(p.y * p.y )-9.0)) * (time * 0.1));

	// vec3 hoge = vec3( sin(time*0.1) , sin(time*0.2), sin(time*0.3) );

	ray.xz = vec2(
		ray.x*cos(mouse.x)+ray.z*sin(mouse.x),
		ray.z*cos(mouse.x)-ray.x*sin(mouse.x)
	);

	ray.yz = vec2(
		ray.y*cos(mouse.y)+ray.z*sin(mouse.y),
		ray.z*cos(mouse.y)-ray.y*sin(mouse.y)
	);

	float len = 0.0;
	for(int i=0; i<32; i++){
		cur = cam + ray * len;
		float dist = (2. - 0.5-cos(cur.x  )+cos(cur.y)+(cos(cur.z)))/(abs(ray.x)+abs(ray.y)+abs(ray.z) );
		if (dist < 0.) break;
		len += dist;
	}

	gl_FragColor = vec4(vec3(length(cur - cam ) / 64.0    ), 1);
}
