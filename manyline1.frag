precision mediump float;
uniform float time;
uniform vec2 resolution;

void main() {

  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min (resolution.x,resolution.y);
  float l_x = 0.01 * length(sin(time) / p.x);
  float l_y = 0.01 * length(sin(time) / p.y);

  float x = (p.x * p.x + p.y * p.y - 0.2);
  gl_FragColor = vec4( vec3( tan(x * time  *2.0  ) + abs((p.x*p.x+p.y*p.y)*time) ) , 0.5);

}
