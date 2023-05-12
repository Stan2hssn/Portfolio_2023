uniform float uIntensity;
uniform float uTime;
uniform sampler2D uNoise;
varying vec2 vUv;
varying vec3 vDisplacement;

void main() {
    vUv = uv;
    float noise = (texture2D(uNoise, vUv).r + texture2D(uNoise, vUv * 1.5).r + texture2D(uNoise, vUv * 2.0).r);

    vDisplacement = position * noise * uTime * 2.;

    vec3 newPosition = position + normal * (uIntensity * vDisplacement);

    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}