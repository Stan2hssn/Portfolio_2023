const vertexShader = `

uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    vUv = uv;
    vec3 newPosition = position + normal * (u_intensity * vDisplacement);
    vDisplacement = length(newPosition - position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1)
}

`;

export default vertexShader;
