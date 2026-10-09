import{r as e}from"./rolldown-runtime-D0yXDDFE.js";import{a as t,o as n}from"./framework-Dm2LD62T.js";import{t as r}from"./sitePath-yR_Sue8-.js";import{$ as i,B as a,E as o,J as s,L as c,O as l,Q as u,S as d,T as f,V as p,W as m,X as h,Z as g,_,a as v,b as y,d as b,et as ee,f as x,i as S,n as C,r as w,s as T,t as E,tt as te,w as D,x as O,y as k}from"./react-three-fiber.esm-Tkiq9WsY.js";import{n as A,t as j}from"./OrbitControls-BCyEuiOe.js";import{a as M,m as N,n as P,t as F}from"./xiangqiSceneConfig-DG3_81GG.js";var I=parseInt(`180`.replace(/\D+/g,``)),ne=I>=125?`uv1`:`uv2`,re={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},ie={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},ae=new T,L=new u,oe=class extends k{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new _([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new _([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new y(t,6,1);return this.setAttribute(`instanceStart`,new O(n,3,0)),this.setAttribute(`instanceEnd`,new O(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new y(n,t*2,1);return this.setAttribute(`instanceColorStart`,new O(r,t,0)),this.setAttribute(`instanceColorEnd`,new O(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new te(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new T);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),ae.setFromBufferAttribute(t),this.boundingBox.union(ae))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new m),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)L.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(L)),L.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(L));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}applyMatrix(e){return console.warn(`THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().`),this.applyMatrix4(e)}},se=class extends oe{constructor(){super(),this.isLineGeometry=!0,this.type=`LineGeometry`}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(t===3)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}},ce=class extends p{constructor(e){super({type:`LineMaterial`,uniforms:h.clone(h.merge([v.common,v.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new g(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${I>=154?`colorspace_fragment`:`encodings_fragment`}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA=`1`:delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return`WORLD_UNITS`in this.defines},set:function(e){e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return`USE_DASH`in this.defines},set(e){!!e!=`USE_DASH`in this.defines&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return`USE_ALPHA_TO_COVERAGE`in this.defines},set:function(e){!!e!=`USE_ALPHA_TO_COVERAGE`in this.defines&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE=``,this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}},le=new i,ue=new u,de=new u,R=new i,z=new i,B=new i,fe=new u,pe=new f,V=new d,me=new u,H=new T,U=new m,W=new i,G,K;function he(e,t,n){return W.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),W.multiplyScalar(1/W.w),W.x=K/n.width,W.y=K/n.height,W.applyMatrix4(e.projectionMatrixInverse),W.multiplyScalar(1/W.w),Math.abs(Math.max(W.x,W.y))}function ge(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){V.start.fromBufferAttribute(i,r),V.end.fromBufferAttribute(a,r),V.applyMatrix4(n);let o=new u,s=new u;G.distanceSqToSegment(V.start,V.end,s,o),s.distanceTo(o)<K*.5&&t.push({point:s,pointOnLine:o,distance:G.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,[ne]:null})}}function _e(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),d=-t.near;G.at(1,B),B.w=1,B.applyMatrix4(t.matrixWorldInverse),B.applyMatrix4(r),B.multiplyScalar(1/B.w),B.x*=i.x/2,B.y*=i.y/2,B.z=0,fe.copy(B),pe.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(R.fromBufferAttribute(s,t),z.fromBufferAttribute(c,t),R.w=1,z.w=1,R.applyMatrix4(pe),z.applyMatrix4(pe),R.z>d&&z.z>d)continue;if(R.z>d){let e=R.z-z.z,t=(R.z-d)/e;R.lerp(z,t)}else if(z.z>d){let e=z.z-R.z,t=(z.z-d)/e;z.lerp(R,t)}R.applyMatrix4(r),z.applyMatrix4(r),R.multiplyScalar(1/R.w),z.multiplyScalar(1/z.w),R.x*=i.x/2,R.y*=i.y/2,z.x*=i.x/2,z.y*=i.y/2,V.start.copy(R),V.start.z=0,V.end.copy(z),V.end.z=0;let o=V.closestPointToPointParameter(fe,!0);V.at(o,me);let l=D.lerp(R.z,z.z,o),f=l>=-1&&l<=1,p=fe.distanceTo(me)<K*.5;if(f&&p){V.start.fromBufferAttribute(s,t),V.end.fromBufferAttribute(c,t),V.start.applyMatrix4(a),V.end.applyMatrix4(a);let r=new u,i=new u;G.distanceSqToSegment(V.start,V.end,i,r),n.push({point:i,pointOnLine:r,distance:G.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,[ne]:null})}}}var ve=class extends o{constructor(e=new oe,t=new ce({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)ue.fromBufferAttribute(t,e),de.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+ue.distanceTo(de);let i=new y(r,2,1);return e.setAttribute(`instanceDistanceStart`,new O(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new O(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`);let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;G=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;K=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),U.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?K*.5:he(r,Math.max(r.near,U.distanceToPoint(G.origin)),s.resolution),U.radius+=c,G.intersectsSphere(U)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),H.copy(o.boundingBox).applyMatrix4(a);let l;l=n?K*.5:he(r,Math.max(r.near,H.distanceToPoint(G.origin)),s.resolution),H.expandByScalar(l),G.intersectsBox(H)!==!1&&(n?ge(this,t):_e(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(le),this.material.uniforms.resolution.value.set(le.z,le.w))}},ye=class extends ve{constructor(e=new se,t=new ce({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type=`Line2`}},q=e(t()),be=q.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:r,lineWidth:a,segments:o,dashed:s,...c},l){var d;let f=S(e=>e.size),p=q.useMemo(()=>o?new ve:new ye,[o]),[m]=q.useState(()=>new ce),h=(n==null||(d=n[0])==null?void 0:d.length)===4?4:3,_=q.useMemo(()=>{let r=o?new oe:new se,a=e.map(e=>{let t=Array.isArray(e);return e instanceof u||e instanceof i?[e.x,e.y,e.z]:e instanceof g?[e.x,e.y,0]:t&&e.length===3?[e[0],e[1],e[2]]:t&&e.length===2?[e[0],e[1],0]:e});if(r.setPositions(a.flat()),n){t=16777215;let e=n.map(e=>e instanceof x?e.toArray():e);r.setColors(e.flat(),h)}return r},[e,o,n,h]);return q.useLayoutEffect(()=>{p.computeLineDistances()},[e,p]),q.useLayoutEffect(()=>{s?m.defines.USE_DASH=``:delete m.defines.USE_DASH,m.needsUpdate=!0},[s,m]),q.useEffect(()=>()=>{_.dispose(),m.dispose()},[_]),q.createElement(`primitive`,A({object:p,ref:l},c),q.createElement(`primitive`,{object:_,attach:`geometry`}),q.createElement(`primitive`,A({object:m,attach:`material`,color:t,vertexColors:!!n,resolution:[f.width,f.height],linewidth:r??a??1,dashed:s,transparent:h===4},c)))}),xe=parseInt(`180`.replace(/\D+/g,``)),Se=q.forwardRef(({scale:e=10,frames:t=1/0,opacity:n=1,width:r=1,height:i=1,blur:a=1,near:s=0,far:u=10,resolution:d=512,smooth:f=!0,color:m=`#000000`,depthWrite:h=!1,renderOrder:g,..._},v)=>{let y=q.useRef(null),b=S(e=>e.scene),C=S(e=>e.gl),T=q.useRef(null);r*=Array.isArray(e)?e[0]:e||1,i*=Array.isArray(e)?e[1]:e||1;let[E,te,D,O,k,j,M]=q.useMemo(()=>{let e=new ee(d,d),t=new ee(d,d);t.texture.generateMipmaps=e.texture.generateMipmaps=!1;let n=new c(r,i).rotateX(Math.PI/2),a=new o(n),s=new l;s.depthTest=s.depthWrite=!1,s.onBeforeCompile=e=>{e.uniforms={...e.uniforms,ucolor:{value:new x(m)}},e.fragmentShader=e.fragmentShader.replace(`void main() {`,`uniform vec3 ucolor;
           void main() {
          `),e.fragmentShader=e.fragmentShader.replace(`vec4( vec3( 1.0 - fragCoordZ ), opacity );`,`vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );`)};let u=new p(re),f=new p(ie);return f.depthTest=u.depthTest=!1,[e,n,s,a,u,f,t]},[d,r,i,e,m]),N=e=>{O.visible=!0,O.material=k,k.uniforms.tDiffuse.value=E.texture,k.uniforms.h.value=e*1/256,C.setRenderTarget(M),C.render(O,T.current),O.material=j,j.uniforms.tDiffuse.value=M.texture,j.uniforms.v.value=e*1/256,C.setRenderTarget(E),C.render(O,T.current),O.visible=!1},P=0,F,I;return w(()=>{T.current&&(t===1/0||P<t)&&(P++,F=b.background,I=b.overrideMaterial,y.current.visible=!1,b.background=null,b.overrideMaterial=D,C.setRenderTarget(E),C.render(b,T.current),N(a),f&&N(a*.4),C.setRenderTarget(null),y.current.visible=!0,b.overrideMaterial=I,b.background=F)}),q.useImperativeHandle(v,()=>y.current,[]),q.createElement(`group`,A({"rotation-x":Math.PI/2},_,{ref:y}),q.createElement(`mesh`,{renderOrder:g,geometry:te,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},q.createElement(`meshBasicMaterial`,{transparent:!0,map:E.texture,opacity:n,depthWrite:h})),q.createElement(`orthographicCamera`,{ref:T,args:[-r/2,r/2,i/2,-i/2,s,u]}))}),Ce=class extends p{constructor(){super({uniforms:{time:{value:0},pixelRatio:{value:1}},vertexShader:`
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${xe>=154?`colorspace_fragment`:`encodings_fragment`}>
        }
      `})}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}get pixelRatio(){return this.uniforms.pixelRatio.value}set pixelRatio(e){this.uniforms.pixelRatio.value=e}},we=e=>e&&e.constructor===Float32Array,Te=e=>[e.r,e.g,e.b],Ee=e=>e instanceof g||e instanceof u||e instanceof i,De=e=>Array.isArray(e)?e:Ee(e)?e.toArray():[e,e,e];function J(e,t,n){return q.useMemo(()=>{if(t!==void 0){if(we(t))return t;if(t instanceof x){let n=Array.from({length:e*3},()=>Te(t)).flat();return Float32Array.from(n)}else if(Ee(t)||Array.isArray(t)){let n=Array.from({length:e*3},()=>De(t)).flat();return Float32Array.from(n)}return Float32Array.from({length:e},()=>t)}return Float32Array.from({length:e},n)},[t])}var Oe=q.forwardRef(({noise:e=1,count:t=100,speed:n=1,opacity:r=1,scale:i=1,size:a,color:o,children:s,...c},l)=>{q.useMemo(()=>C({SparklesImplMaterial:Ce}),[]);let u=q.useRef(null),d=S(e=>e.viewport.dpr),f=De(i),p=q.useMemo(()=>Float32Array.from(Array.from({length:t},()=>f.map(D.randFloatSpread)).flat()),[t,...f]),m=J(t,a,Math.random),h=J(t,r),g=J(t,n),_=J(t*3,e),v=J(o===void 0?t*3:t,we(o)?o:new x(o),()=>1);return w(e=>{u.current&&u.current.material&&(u.current.material.time=e.clock.elapsedTime)}),q.useImperativeHandle(l,()=>u.current,[]),q.createElement(`points`,A({key:`particle-${t}-${JSON.stringify(i)}`},c,{ref:u}),q.createElement(`bufferGeometry`,null,q.createElement(`bufferAttribute`,{attach:`attributes-position`,args:[p,3]}),q.createElement(`bufferAttribute`,{attach:`attributes-size`,args:[m,1]}),q.createElement(`bufferAttribute`,{attach:`attributes-opacity`,args:[h,1]}),q.createElement(`bufferAttribute`,{attach:`attributes-speed`,args:[g,1]}),q.createElement(`bufferAttribute`,{attach:`attributes-color`,args:[v,3]}),q.createElement(`bufferAttribute`,{attach:`attributes-noise`,args:[_,3]})),s||q.createElement(`sparklesImplMaterial`,{transparent:!0,pixelRatio:d,depthWrite:!1}))}),Y=(e,t)=>e.reduce((e,n,r)=>e+n*t[r],0),ke=e=>{let t=Math.hypot(...e);return e.map(e=>e/t)},Ae=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]];function je(e,t){let n=ke({red:[0,11,15],black:[0,11,-15],tactical:[0,1,.09],cinematic:[12,11,16]}[e]),r=ke(Ae([0,1,0],n)),i=Ae(n,r),a=[0,.4,0],o=Math.tan(39*Math.PI/360),s=o*Math.max(.2,t),c=[-5.7,5.7].flatMap(e=>[-.4,2].flatMap(t=>[-6.4,6.4].map(n=>[e,t-a[1],n]))),l=Math.max(12,...c.flatMap(e=>[Y(e,n)+Math.abs(Y(e,r))/(s*.88),Y(e,n)+Math.abs(Y(e,i))/(o*.72)]))*1.03;return{position:n.map((e,t)=>e*l+a[t]),target:a,distance:l,direction:n,right:r,up:i,tanVertical:o,tanHorizontal:s,corners:c}}var X=n(),Me=new Map,Ne={bamboo:`/xiangqi-bamboo-cinematic-v2.webp`,palace:`/xiangqi-palace-cinematic-v1.webp`,embers:`/xiangqi-embers-cinematic-v2.webp`,frost:`/xiangqi-frost-cinematic-v2.webp`};function Z(e,t,n=`transparent`,r=256,i=!1){if(typeof document>`u`)return null;let o=`${e}|${t}|${n}|${r}|${i}`;if(Me.has(o))return Me.get(o);let s=document.createElement(`canvas`);s.width=r*(i?1:2),s.height=r;let c=s.getContext(`2d`);c.clearRect(0,0,s.width,s.height),n!==`transparent`&&(c.fillStyle=n,c.fillRect(0,0,s.width,s.height)),c.fillStyle=t,c.textAlign=`center`,c.textBaseline=`middle`,c.font=`700 ${Math.round(r*.62)}px "Noto Serif TC", "Microsoft JhengHei", serif`,c.shadowColor=`rgba(0,0,0,.55)`,c.shadowBlur=7,c.fillText(e,s.width/2,s.height/2+r*.03);let l=new b(s);return l.colorSpace=a,l.anisotropy=8,Me.set(o,l),l}function Pe({view:e,resetToken:t,motion:n}){let{camera:r,size:i}=S(),a=(0,q.useRef)(null),o=(0,q.useRef)(0);return(0,q.useEffect)(()=>{let o=je(e,i.width/Math.max(1,i.height)),s=a.current;s&&(s.autoRotate=!1,s.enableDamping=!1,s.update(),s.target.set(...o.target)),r.position.set(...o.position),r.lookAt(...o.target),s&&(s.update(),s.enableDamping=!0,s.autoRotate=n===`orbit`),M({component:`camera`,event:`preset_applied`,correlationId:P(`camera`),input:{view:e,resetToken:t,motion:n,aspect:Number((i.width/i.height).toFixed(2))},stateAfter:{position:r.position.toArray(),distance:o.distance}})},[r,n,t,i.height,i.width,e]),(0,X.jsx)(j,{ref:a,makeDefault:!0,autoRotate:n===`orbit`,autoRotateSpeed:.48,enablePan:!1,enableDamping:!0,dampingFactor:.065,rotateSpeed:.58,zoomSpeed:.72,minDistance:8.8,maxDistance:120,minPolarAngle:.08,maxPolarAngle:1.3,target:[0,.35,0],onStart:()=>{o.current=performance.now(),M({component:`camera`,event:`gesture_start`,correlationId:P(`orbit`)})},onEnd:()=>M({component:`camera`,event:`gesture_end`,correlationId:P(`orbit`),elapsedMs:Math.round(performance.now()-o.current),result:{position:r.position.toArray().map(e=>Number(e.toFixed(2)))}})})}function Q({color:e}){return(0,X.jsx)(`meshPhysicalMaterial`,{color:e,metalness:.82,roughness:.2,clearcoat:.58,clearcoatRoughness:.16})}function Fe({kind:e,metal:t,armor:n}){return e===`K`?(0,X.jsxs)(`group`,{position:[0,1.04,0],children:[(0,X.jsxs)(`mesh`,{castShadow:!0,children:[(0,X.jsx)(`boxGeometry`,{args:[.31,.08,.22]}),(0,X.jsx)(Q,{color:t})]}),[-.12,0,.12].map((e,n)=>(0,X.jsxs)(`mesh`,{castShadow:!0,position:[e,.09+(n===1?.035:0),0],children:[(0,X.jsx)(`coneGeometry`,{args:[.045,.18,4]}),(0,X.jsx)(Q,{color:t})]},e))]}):e===`A`?(0,X.jsxs)(`group`,{position:[0,.64,-.1],children:[(0,X.jsxs)(`mesh`,{castShadow:!0,rotation:[0,0,.7],children:[(0,X.jsx)(`boxGeometry`,{args:[.055,.78,.055]}),(0,X.jsx)(Q,{color:t})]}),(0,X.jsxs)(`mesh`,{castShadow:!0,rotation:[0,0,-.7],children:[(0,X.jsx)(`boxGeometry`,{args:[.055,.78,.055]}),(0,X.jsx)(Q,{color:t})]}),(0,X.jsxs)(`mesh`,{castShadow:!0,position:[0,.34,0],children:[(0,X.jsx)(`octahedronGeometry`,{args:[.09,0]}),(0,X.jsx)(Q,{color:t})]})]}):e===`E`?(0,X.jsxs)(`group`,{position:[0,.68,.13],children:[[-.25,.25].map(e=>(0,X.jsxs)(`mesh`,{castShadow:!0,position:[e,0,.02],rotation:[Math.PI/2,0,e<0?-.22:.22],children:[(0,X.jsx)(`coneGeometry`,{args:[.045,.27,8]}),(0,X.jsx)(Q,{color:`#f4ddaa`})]},e)),(0,X.jsxs)(`mesh`,{castShadow:!0,position:[0,.23,-.02],scale:[1.2,.76,1],children:[(0,X.jsx)(`sphereGeometry`,{args:[.15,10,7]}),(0,X.jsx)(Q,{color:n})]})]}):e===`H`?(0,X.jsxs)(`group`,{position:[0,.95,.015],rotation:[-.1,0,0],children:[(0,X.jsxs)(`mesh`,{castShadow:!0,position:[0,.02,.035],scale:[.85,1.3,1],children:[(0,X.jsx)(`sphereGeometry`,{args:[.15,10,7]}),(0,X.jsx)(Q,{color:n})]}),[-.07,.07].map(e=>(0,X.jsxs)(`mesh`,{castShadow:!0,position:[e,.18,0],rotation:[0,0,e<0?.12:-.12],children:[(0,X.jsx)(`coneGeometry`,{args:[.035,.16,7]}),(0,X.jsx)(Q,{color:t})]},e)),(0,X.jsxs)(`mesh`,{castShadow:!0,position:[0,-.05,.16],rotation:[Math.PI/2,0,0],children:[(0,X.jsx)(`capsuleGeometry`,{args:[.045,.17,3,7]}),(0,X.jsx)(Q,{color:n})]})]}):e===`R`?(0,X.jsxs)(`group`,{position:[0,.91,-.06],children:[(0,X.jsxs)(`mesh`,{castShadow:!0,children:[(0,X.jsx)(`boxGeometry`,{args:[.42,.18,.16]}),(0,X.jsx)(Q,{color:n})]}),[-.16,0,.16].map(e=>(0,X.jsxs)(`mesh`,{castShadow:!0,position:[e,.16,0],children:[(0,X.jsx)(`boxGeometry`,{args:[.09,.18,.16]}),(0,X.jsx)(Q,{color:t})]},e))]}):e===`C`?(0,X.jsxs)(`group`,{position:[.27,.62,.02],rotation:[0,0,-.18],children:[(0,X.jsxs)(`mesh`,{castShadow:!0,rotation:[0,0,Math.PI/2],children:[(0,X.jsx)(`cylinderGeometry`,{args:[.065,.095,.58,10]}),(0,X.jsx)(Q,{color:t})]}),(0,X.jsxs)(`mesh`,{castShadow:!0,position:[-.24,-.1,0],children:[(0,X.jsx)(`boxGeometry`,{args:[.18,.12,.2]}),(0,X.jsx)(Q,{color:n})]})]}):(0,X.jsxs)(`group`,{position:[.27,.65,-.02],rotation:[0,0,-.12],children:[(0,X.jsxs)(`mesh`,{castShadow:!0,children:[(0,X.jsx)(`capsuleGeometry`,{args:[.035,.78,3,7]}),(0,X.jsx)(Q,{color:t})]}),(0,X.jsxs)(`mesh`,{castShadow:!0,position:[0,.49,0],children:[(0,X.jsx)(`coneGeometry`,{args:[.075,.22,6]}),(0,X.jsx)(Q,{color:t})]})]})}function Ie({piece:e}){let t=e.side===`red`,n=t?{dark:`#4b070b`,armor:`#c4262e`,bright:`#ff5946`,metal:`#ffd06a`,glow:`#ff3425`,glyph:`#fff0bf`}:{dark:`#020508`,armor:`#11262e`,bright:`#59d9d0`,metal:`#dcfff9`,glow:`#56f5e3`,glyph:`#effffc`},r=(0,q.useMemo)(()=>Z(N[e.side][e.kind],n.glyph,`transparent`,192),[n.glyph,e.kind,e.side]);return(0,X.jsxs)(`group`,{rotation:[0,t?0:Math.PI,0],children:[(0,X.jsxs)(`mesh`,{castShadow:!0,receiveShadow:!0,position:[0,.055,0],children:[(0,X.jsx)(`boxGeometry`,{args:[.62,.11,.52]}),(0,X.jsx)(`meshPhysicalMaterial`,{color:n.dark,metalness:.48,roughness:.3,clearcoat:.68,clearcoatRoughness:.2})]}),(0,X.jsxs)(`mesh`,{castShadow:!0,position:[0,.13,0],children:[(0,X.jsx)(`boxGeometry`,{args:[.51,.07,.43]}),(0,X.jsx)(`meshPhysicalMaterial`,{color:n.bright,metalness:.62,roughness:.24,clearcoat:.66,clearcoatRoughness:.16,emissive:n.glow,emissiveIntensity:t?.18:.58})]}),[-.13,.13].map(e=>(0,X.jsxs)(`mesh`,{castShadow:!0,position:[e,.235,.015],children:[(0,X.jsx)(`boxGeometry`,{args:[.13,.24,.18]}),(0,X.jsx)(`meshStandardMaterial`,{color:n.dark,metalness:.55,roughness:.32})]},e)),(0,X.jsxs)(`mesh`,{castShadow:!0,position:[0,.43,0],children:[(0,X.jsx)(`cylinderGeometry`,{args:[.2,.31,.39,6]}),(0,X.jsx)(`meshPhysicalMaterial`,{color:n.armor,metalness:.5,roughness:.28,clearcoat:.55,clearcoatRoughness:.19,emissive:n.glow,emissiveIntensity:t?.06:.13})]}),(0,X.jsxs)(`mesh`,{castShadow:!0,position:[0,.665,0],scale:[1,1.08,.8],children:[(0,X.jsx)(`capsuleGeometry`,{args:[.205,.16,3,8]}),(0,X.jsx)(`meshPhysicalMaterial`,{color:n.bright,metalness:.58,roughness:.22,clearcoat:.62,clearcoatRoughness:.16,emissive:n.glow,emissiveIntensity:t?.075:.15})]}),(0,X.jsxs)(`mesh`,{castShadow:!0,position:[0,.755,0],children:[(0,X.jsx)(`boxGeometry`,{args:[.46,.065,.23]}),(0,X.jsx)(`meshPhysicalMaterial`,{color:n.bright,metalness:.58,roughness:.22,clearcoat:.58,emissive:n.glow,emissiveIntensity:t?.42:.72})]}),(0,X.jsxs)(`mesh`,{position:[0,.792,0],children:[(0,X.jsx)(`boxGeometry`,{args:[.33,.012,.16]}),(0,X.jsx)(`meshBasicMaterial`,{color:t?`#ff4938`:`#64f7e8`,toneMapped:!1})]}),[-.255,.255].map(e=>(0,X.jsxs)(`mesh`,{castShadow:!0,position:[e,.69,0],scale:[1.25,.76,1],children:[(0,X.jsx)(`sphereGeometry`,{args:[.13,9,6]}),(0,X.jsx)(Q,{color:n.metal})]},e)),(0,X.jsxs)(`mesh`,{castShadow:!0,position:[0,.895,0],children:[(0,X.jsx)(`sphereGeometry`,{args:[.14,10,7]}),(0,X.jsx)(`meshStandardMaterial`,{color:`#b88665`,metalness:.08,roughness:.6})]}),(0,X.jsxs)(`mesh`,{castShadow:!0,position:[0,.955,-.018],scale:[1.16,.76,1.04],children:[(0,X.jsx)(`sphereGeometry`,{args:[.15,10,7]}),(0,X.jsx)(`meshPhysicalMaterial`,{color:n.dark,metalness:.68,roughness:.24,clearcoat:.45})]}),(0,X.jsxs)(`mesh`,{position:[0,.67,.184],children:[(0,X.jsx)(`planeGeometry`,{args:[.36,.18]}),(0,X.jsx)(`meshBasicMaterial`,{map:r,transparent:!0,toneMapped:!1,depthWrite:!1})]}),(0,X.jsx)(Fe,{kind:e.kind,metal:n.metal,armor:n.armor})]})}function Le({color:e}){return(0,X.jsx)(be,{points:[[0,.028,-.56],[.56,.028,0],[0,.028,.56],[-.56,.028,0],[0,.028,-.56]],color:e,lineWidth:2.4,transparent:!0,opacity:.96})}function Re({piece:e,active:t}){let n=(0,q.useMemo)(()=>Z(N[e.side][e.kind],`#fff9e5`,e.side===`red`?`#8c211e`:`#152a2b`,160,!0),[e.kind,e.side]);return(0,X.jsx)(`sprite`,{position:[0,1.6,0],scale:t?[.9,.9,1]:[.8,.8,1],renderOrder:20,children:(0,X.jsx)(`spriteMaterial`,{map:n,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1})})}function ze({piece:e,selected:t,checked:n,showBadge:r,onChoose:i}){let a=(0,q.useRef)(null),[o,s]=(0,q.useState)(!1),c=e.side===`red`,l=(0,q.useMemo)(()=>new u(e.x-4,.18,e.y-4.5),[e.x,e.y]);return(0,q.useEffect)(()=>(document.body.style.cursor=o?`pointer`:`default`,()=>{document.body.style.cursor=`default`}),[o]),w(({clock:e},n)=>{if(!a.current)return;let r=1-8e-4**n;a.current.position.x=D.lerp(a.current.position.x,l.x,r),a.current.position.z=D.lerp(a.current.position.z,l.z,r);let i=Math.abs(a.current.position.x-l.x)+Math.abs(a.current.position.z-l.z),o=t?.39+Math.sin(e.elapsedTime*4)*.035:.18+Math.min(.28,i*.18);a.current.position.y=D.lerp(a.current.position.y,o,r),a.current.rotation.y=D.lerp(a.current.rotation.y,t?Math.sin(e.elapsedTime*1.4)*.06:0,r)}),(0,X.jsxs)(`group`,{ref:a,position:[l.x,l.y,l.z],onClick:t=>{t.stopPropagation(),!(t.delta>6)&&i(e.x,e.y,P(`piece`))},onPointerOver:e=>{e.stopPropagation(),s(!0)},onPointerOut:()=>s(!1),children:[(t||n)&&(0,X.jsx)(`pointLight`,{color:n?`#ff3a21`:c?`#ff6247`:`#69ebc0`,intensity:n?4.5:2.8,distance:3.4,position:[0,.72,0]}),(0,X.jsx)(Ie,{piece:e}),r&&(0,X.jsx)(Re,{piece:e,active:t||o||n}),(t||o||n)&&(0,X.jsx)(Le,{color:n?`#ff3822`:c?`#ff7458`:`#59e5d2`})]})}function Be({x:e,y:t,legal:n,occupied:r,palette:i,onChoose:a}){return(0,X.jsxs)(`group`,{position:[e-4,.09,t-4.5],children:[(0,X.jsxs)(`mesh`,{onClick:n=>{n.stopPropagation(),!(n.delta>6)&&a(e,t,P(`point`))},children:[(0,X.jsx)(`boxGeometry`,{args:[1,.08,1]}),(0,X.jsx)(`meshBasicMaterial`,{transparent:!0,opacity:0,depthWrite:!1})]}),n&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(`mesh`,{rotation:[Math.PI/2,0,0],position:[0,.075,0],children:[(0,X.jsx)(`torusGeometry`,{args:[r?.48:.24,r?.04:.06,10,42]}),(0,X.jsx)(`meshBasicMaterial`,{color:r?`#ff5a3e`:i.accent,transparent:!0,opacity:.96,toneMapped:!1})]}),(0,X.jsx)(`pointLight`,{color:r?`#ff492f`:i.accent,intensity:1.35,distance:1.4,position:[0,.22,0]})]})]})}function Ve({move:e,palette:t}){let n=[e.from.x-4,.115,e.from.y-4.5],r=[e.to.x-4,.115,e.to.y-4.5];return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(be,{points:[n,r],color:t.metal,lineWidth:1.5,transparent:!0,opacity:.48,dashed:!0,dashSize:.15,gapSize:.12}),[n,r].map((e,n)=>(0,X.jsxs)(`mesh`,{position:e,rotation:[Math.PI/2,0,0],children:[(0,X.jsx)(`ringGeometry`,{args:[n?.34:.24,n?.42:.3,40]}),(0,X.jsx)(`meshBasicMaterial`,{color:n?t.accent:t.metal,transparent:!0,opacity:n?.62:.34,toneMapped:!1})]},n))]})}function He({point:e,color:t}){let n=(0,q.useRef)(null),r=(0,q.useRef)([]),i=(0,q.useRef)(null);return w(({clock:e})=>{if(!n.current)return;i.current===null&&(i.current=e.elapsedTime);let t=Math.min(1,(e.elapsedTime-i.current)/1.15);n.current.scale.setScalar(.25+t*2.3),r.current.forEach(e=>{e.opacity=Math.max(0,(1-t)*.85)}),n.current.visible=t<1}),(0,X.jsxs)(`group`,{ref:n,position:[e.x-4,.2,e.y-4.5],children:[[0,.22,.44].map((e,n)=>(0,X.jsxs)(`mesh`,{position:[0,e,0],rotation:[Math.PI/2,0,0],children:[(0,X.jsx)(`torusGeometry`,{args:[.22+n*.1,.035,8,36]}),(0,X.jsx)(`meshBasicMaterial`,{ref:e=>{e&&(r.current[n]=e)},color:t,transparent:!0,toneMapped:!1})]},e)),(0,X.jsx)(`pointLight`,{color:t,intensity:7,distance:4})]})}function Ue(e){let t=(0,q.useMemo)(()=>Z(`楚河`,`#cfe4db`,`transparent`,256),[]),n=(0,q.useMemo)(()=>Z(`漢界`,`#f0d49b`,`transparent`,256),[]),r=(0,q.useMemo)(()=>{let e=[];for(let t=0;t<10;t++)e.push([[-4,.074,t-4.5],[4,.074,t-4.5]]);for(let t=-4;t<=4;t++)Math.abs(t)===4?e.push([[t,.074,-4.5],[t,.074,4.5]]):(e.push([[t,.074,-4.5],[t,.074,-.5]]),e.push([[t,.074,.5],[t,.074,4.5]]));return e.push([[-1,.076,-4.5],[1,.076,-2.5]],[[1,.076,-4.5],[-1,.076,-2.5]],[[-1,.076,2.5],[1,.076,4.5]],[[1,.076,2.5],[-1,.076,4.5]]),e},[]);return(0,X.jsxs)(`group`,{children:[(0,X.jsxs)(`mesh`,{receiveShadow:!0,position:[0,-.5,0],children:[(0,X.jsx)(`boxGeometry`,{args:[10.9,.62,12.4]}),(0,X.jsx)(`meshStandardMaterial`,{color:e.palette.floor,metalness:.68,roughness:.24})]}),(0,X.jsxs)(`mesh`,{receiveShadow:!0,position:[0,-.17,0],children:[(0,X.jsx)(`boxGeometry`,{args:[10.25,.24,11.7]}),(0,X.jsx)(`meshStandardMaterial`,{color:e.palette.wood,metalness:.42,roughness:.36})]}),(0,X.jsxs)(`mesh`,{receiveShadow:!0,position:[0,-.02,0],children:[(0,X.jsx)(`boxGeometry`,{args:[9.45,.12,10.65]}),(0,X.jsx)(`meshStandardMaterial`,{color:e.palette.metal,metalness:.35,roughness:.42})]}),(0,X.jsxs)(`mesh`,{receiveShadow:!0,position:[0,.05,0],rotation:[-Math.PI/2,0,0],children:[(0,X.jsx)(`planeGeometry`,{args:[8.62,9.62]}),(0,X.jsx)(`meshStandardMaterial`,{color:e.palette.board,metalness:.04,roughness:.76})]}),(0,X.jsxs)(`mesh`,{position:[0,.064,0],rotation:[-Math.PI/2,0,0],children:[(0,X.jsx)(`planeGeometry`,{args:[8.05,1]}),(0,X.jsx)(`meshStandardMaterial`,{color:e.palette.river,metalness:.18,roughness:.62,transparent:!0,opacity:.82})]}),r.map((t,n)=>(0,X.jsx)(be,{points:t,color:e.palette.line,lineWidth:1.15,transparent:!0,opacity:.9},n)),[{x:-2.15,texture:t},{x:2.15,texture:n}].map(({x:e,texture:t})=>(0,X.jsxs)(`mesh`,{position:[e,.087,0],rotation:[-Math.PI/2,0,0],children:[(0,X.jsx)(`planeGeometry`,{args:[2.25,.58]}),(0,X.jsx)(`meshBasicMaterial`,{map:t,transparent:!0,toneMapped:!1})]},e)),e.lastMove&&(0,X.jsx)(Ve,{move:e.lastMove,palette:e.palette}),Array.from({length:90},(t,n)=>{let r=n%9,i=Math.floor(n/9);return(0,X.jsx)(Be,{x:r,y:i,legal:e.legal.some(e=>e.x===r&&e.y===i),occupied:e.board.some(e=>e.x===r&&e.y===i),palette:e.palette,onChoose:e.onChoose},n)}),e.board.map(t=>(0,X.jsx)(ze,{piece:t,selected:t.id===e.selectedId,checked:t.kind===`K`&&t.side===e.checkSide,showBadge:e.showBadges,onChoose:e.onChoose},t.id)),e.captureEffects&&e.capturePoint&&e.captureToken>0&&(0,X.jsx)(He,{point:e.capturePoint,color:e.palette.ember},e.captureToken),[[-4.92,-5.58],[4.92,-5.58],[-4.92,5.58],[4.92,5.58]].map(([t,n],r)=>(0,X.jsxs)(`group`,{position:[t,.04,n],children:[(0,X.jsxs)(`mesh`,{castShadow:!0,children:[(0,X.jsx)(`cylinderGeometry`,{args:[.21,.29,.45,10]}),(0,X.jsx)(`meshStandardMaterial`,{color:e.palette.wood,metalness:.74,roughness:.24})]}),(0,X.jsxs)(`mesh`,{castShadow:!0,position:[0,.32,0],children:[(0,X.jsx)(`sphereGeometry`,{args:[.18,12,9]}),(0,X.jsx)(`meshStandardMaterial`,{color:e.palette.metal,metalness:.84,roughness:.18})]})]},r))]})}function We({color:e}){let t=(0,q.useRef)(null);return w(({clock:e})=>{t.current&&(t.current.scale.y=1+Math.sin(e.elapsedTime*8+t.current.position.x)*.16,t.current.rotation.y+=.014)}),(0,X.jsxs)(`group`,{ref:t,position:[0,.72,0],children:[(0,X.jsxs)(`mesh`,{position:[0,.12,0],children:[(0,X.jsx)(`sphereGeometry`,{args:[.24,14,10]}),(0,X.jsx)(`meshBasicMaterial`,{color:e,transparent:!0,opacity:.72,toneMapped:!1})]}),(0,X.jsxs)(`mesh`,{position:[0,.38,0],children:[(0,X.jsx)(`coneGeometry`,{args:[.18,.76,12]}),(0,X.jsx)(`meshBasicMaterial`,{color:e,transparent:!0,opacity:.9,toneMapped:!1})]}),(0,X.jsxs)(`mesh`,{position:[0,.31,.02],scale:[.48,.76,.48],children:[(0,X.jsx)(`sphereGeometry`,{args:[.22,12,8]}),(0,X.jsx)(`meshBasicMaterial`,{color:`#ffd99a`,transparent:!0,opacity:.95,toneMapped:!1})]})]})}function Ge({x:e,z:t,side:n}){let r=(0,q.useRef)(null),i=(0,q.useMemo)(()=>Z(n===`red`?`楚`:`漢`,`#f6dda1`,n===`red`?`#6c1712`:`#0b4b3d`,192),[n]);return w(({clock:t})=>{r.current&&(r.current.rotation.z=Math.sin(t.elapsedTime*.7+e)*.025)}),(0,X.jsxs)(`group`,{position:[e,3.1,t],children:[(0,X.jsxs)(`mesh`,{castShadow:!0,position:[0,.7,0],children:[(0,X.jsx)(`cylinderGeometry`,{args:[.035,.035,2.6,8]}),(0,X.jsx)(`meshStandardMaterial`,{color:`#9a763e`,metalness:.8,roughness:.24})]}),(0,X.jsx)(`group`,{ref:r,children:(0,X.jsxs)(`mesh`,{castShadow:!0,position:[0,.1,0],children:[(0,X.jsx)(`planeGeometry`,{args:[1.2,2.15,1,6]}),(0,X.jsx)(`meshStandardMaterial`,{map:i,side:2,metalness:.08,roughness:.82})]})})]})}function Ke({theme:e,quality:t,onReady:n}){let{scene:i,size:o}=S(),[c,l]=(0,q.useState)(null);return(0,q.useEffect)(()=>{let i=!0,o=P(`environment`),c=performance.now();return M({component:`scene`,event:`environment_load_started`,correlationId:o,input:{theme:e}}),new s().load(r(Ne[e]),e=>{e.colorSpace=a,e.anisotropy=t===`cinematic`?8:2,i&&(l(e),window.requestAnimationFrame(n),M({component:`scene`,event:`environment_load_succeeded`,correlationId:o,elapsedMs:Math.round(performance.now()-c),result:{width:e.image?.width,height:e.image?.height}}))},void 0,e=>{M({component:`scene`,event:`environment_load_failed`,correlationId:o,elapsedMs:Math.round(performance.now()-c),error:e instanceof Error?e.message:String(e)}),i&&n()}),()=>{i=!1}},[n,t,e]),(0,q.useEffect)(()=>(i.backgroundIntensity=t===`cinematic`?1.45:1.12,()=>{i.backgroundIntensity=1}),[t,i]),(0,q.useEffect)(()=>{if(!c||!c.image||o.width<=0||o.height<=0)return;let e=c.image,t=e.width/e.height,n=o.width/o.height;if(n<t){let e=n/t;c.repeat.set(e,1),c.offset.set((1-e)/2,0)}else{let e=t/n;c.repeat.set(1,e),c.offset.set(0,(1-e)/2)}c.needsUpdate=!0},[o.height,o.width,c]),c?(c.colorSpace=a,c.needsUpdate=!0,(0,X.jsx)(`primitive`,{object:c,attach:`background`})):null}function qe({x:e,z:t,side:n,palette:r}){let i=n===`red`?`#8b281e`:`#17483d`;return(0,X.jsxs)(`group`,{position:[e,.42,t],rotation:[0,e<0?.36:-.36,0],children:[(0,X.jsxs)(`mesh`,{castShadow:!0,rotation:[0,0,Math.PI/2],children:[(0,X.jsx)(`cylinderGeometry`,{args:[.82,.82,.54,32]}),(0,X.jsx)(`meshStandardMaterial`,{color:i,metalness:.08,roughness:.68})]}),[-.29,.29].map(e=>(0,X.jsxs)(`mesh`,{position:[e,0,0],rotation:[0,Math.PI/2,0],children:[(0,X.jsx)(`torusGeometry`,{args:[.73,.065,12,48]}),(0,X.jsx)(`meshStandardMaterial`,{color:r.metal,metalness:.78,roughness:.22})]},e)),(0,X.jsxs)(`mesh`,{castShadow:!0,position:[0,-.78,0],children:[(0,X.jsx)(`boxGeometry`,{args:[1.5,.16,.32]}),(0,X.jsx)(`meshStandardMaterial`,{color:r.wood,roughness:.72})]}),[-.58,.58].map(e=>(0,X.jsxs)(`mesh`,{castShadow:!0,position:[e,-.39,0],rotation:[0,0,e<0?-.16:.16],children:[(0,X.jsx)(`boxGeometry`,{args:[.14,.8,.2]}),(0,X.jsx)(`meshStandardMaterial`,{color:r.wood,roughness:.72})]},e))]})}function $({x:e,z:t,palette:n,intensity:r}){return(0,X.jsxs)(`group`,{position:[e,.12,t],children:[(0,X.jsxs)(`mesh`,{castShadow:!0,position:[0,.23,0],children:[(0,X.jsx)(`cylinderGeometry`,{args:[.62,.42,.42,20]}),(0,X.jsx)(`meshStandardMaterial`,{color:`#17100c`,metalness:.7,roughness:.32})]}),(0,X.jsxs)(`mesh`,{position:[0,.48,0],rotation:[Math.PI/2,0,0],children:[(0,X.jsx)(`torusGeometry`,{args:[.53,.085,12,36]}),(0,X.jsx)(`meshStandardMaterial`,{color:n.metal,metalness:.84,roughness:.22})]}),(0,X.jsx)(We,{color:n.ember}),(0,X.jsx)(`pointLight`,{color:n.ember,intensity:r,distance:10,position:[0,1.1,0]})]})}function Je({palette:e}){return(0,X.jsxs)(`group`,{children:[(0,X.jsxs)(`mesh`,{receiveShadow:!0,position:[0,-.78,0],children:[(0,X.jsx)(`boxGeometry`,{args:[20,.2,20]}),(0,X.jsx)(`meshStandardMaterial`,{color:e.floor,metalness:.12,roughness:.92})]}),(0,X.jsxs)(`mesh`,{receiveShadow:!0,position:[0,-.65,0],children:[(0,X.jsx)(`boxGeometry`,{args:[14.8,.16,14.8]}),(0,X.jsx)(`meshStandardMaterial`,{color:`#292722`,metalness:.08,roughness:.88})]})]})}function Ye({theme:e,quality:t,palette:n,onBackdropReady:r}){let i=(0,q.useMemo)(()=>Array.from({length:t===`cinematic`?18:10},(e,n)=>({x:(n<(t===`cinematic`?9:5)?-1:1)*(9.1+n%5*.7),z:-8+n%9*2,h:5.4+n%4*1.05,r:-.07+n%3*.055})),[t]);return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Ke,{theme:e,quality:t,onReady:r}),(0,X.jsx)(Je,{palette:n}),e===`bamboo`&&i.map((e,t)=>(0,X.jsxs)(`group`,{position:[e.x,e.h/2-.5,e.z],rotation:[0,0,e.r],children:[(0,X.jsxs)(`mesh`,{castShadow:!0,children:[(0,X.jsx)(`cylinderGeometry`,{args:[.09,.14,e.h,14]}),(0,X.jsx)(`meshStandardMaterial`,{color:t%2?`#102d22`:`#28553c`,roughness:.9})]}),[-.42,.12,.54].map(t=>(0,X.jsxs)(`group`,{position:[0,e.h*.18+t,0],children:[(0,X.jsxs)(`mesh`,{position:[-.28,0,0],rotation:[0,0,-.92],children:[(0,X.jsx)(`coneGeometry`,{args:[.14,.95,8]}),(0,X.jsx)(`meshStandardMaterial`,{color:`#2b6244`,roughness:.94})]}),(0,X.jsxs)(`mesh`,{position:[.28,.08,0],rotation:[0,0,.92],children:[(0,X.jsx)(`coneGeometry`,{args:[.14,.95,8]}),(0,X.jsx)(`meshStandardMaterial`,{color:`#1d4934`,roughness:.94})]})]},t))]},t)),e===`frost`&&Array.from({length:10},(e,t)=>(0,X.jsxs)(`mesh`,{castShadow:!0,position:[(t%2?-1:1)*(9.4+t%3*.9),-.22,-7.4+t*1.55],rotation:[t*.17,t*.7,.18],children:[(0,X.jsx)(`dodecahedronGeometry`,{args:[.48+t%3*.12,1]}),(0,X.jsx)(`meshStandardMaterial`,{color:`#6fa8b4`,metalness:.34,roughness:.28,emissive:`#174356`,emissiveIntensity:.24})]},t)),e===`embers`&&Array.from({length:11},(e,t)=>(0,X.jsxs)(`mesh`,{castShadow:!0,position:[(t%2?-1:1)*(9.1+t%3),-.2,-7.5+t*1.5],rotation:[0,t*.7,.15],children:[(0,X.jsx)(`dodecahedronGeometry`,{args:[.38+t%3*.14,1]}),(0,X.jsx)(`meshStandardMaterial`,{color:`#26100d`,roughness:.95,emissive:`#5e130b`,emissiveIntensity:.24})]},t)),(0,X.jsx)($,{x:-7.1,z:-6.2,palette:n,intensity:e===`embers`?13:7.5}),(0,X.jsx)($,{x:7.1,z:-6.2,palette:n,intensity:e===`embers`?13:7.5}),(0,X.jsx)($,{x:-7.1,z:6.2,palette:n,intensity:e===`embers`?13:7.5}),(0,X.jsx)($,{x:7.1,z:6.2,palette:n,intensity:e===`embers`?13:7.5}),(0,X.jsx)(qe,{x:-8.7,z:3.6,side:`red`,palette:n}),(0,X.jsx)(qe,{x:8.7,z:-3.6,side:`black`,palette:n}),(0,X.jsx)(Ge,{x:-8.2,z:0,side:`red`}),(0,X.jsx)(Ge,{x:8.2,z:0,side:`black`}),(0,X.jsx)(Oe,{count:t===`cinematic`?92:46,scale:[24,10,24],size:t===`cinematic`?1.8:1.2,speed:e===`embers`?.7:.22,color:e===`frost`?`#bceeff`:n.metal,opacity:e===`embers`?.52:.34})]})}function Xe({brightness:e}){let{gl:t}=S();return(0,q.useEffect)(()=>{t.toneMappingExposure=e},[e,t]),null}function Ze(e){let t=F[e.theme].palette,{size:n}=S(),r=n.width<=700;return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Xe,{brightness:e.brightness}),(0,X.jsx)(`color`,{attach:`background`,args:[t.background]}),(0,X.jsx)(`fog`,{attach:`fog`,args:[t.fog,r?22:e.theme===`embers`?12:15,r?62:35]}),(0,X.jsx)(`ambientLight`,{intensity:r?1.02:e.theme===`embers`?.52:.68,color:t.key}),(0,X.jsx)(`hemisphereLight`,{intensity:r?1.16:.82,color:t.key,groundColor:t.floor}),(0,X.jsx)(`directionalLight`,{castShadow:e.quality===`cinematic`,position:[-6,12,8],intensity:r?4.15:3.1,color:t.key,"shadow-mapSize":[e.quality===`cinematic`?1536:768,e.quality===`cinematic`?1536:768],"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),(0,X.jsx)(`pointLight`,{position:[7,8,-8],intensity:13,distance:28,color:t.fill}),(0,X.jsx)(`pointLight`,{position:[-7,5,8],intensity:10,distance:22,color:t.ember}),(0,X.jsx)(Ye,{theme:e.theme,quality:e.quality,palette:t,onBackdropReady:e.onBackdropReady}),(0,X.jsx)(Ue,{...e,palette:t}),e.quality===`cinematic`&&(0,X.jsx)(Se,{position:[0,-.76,0],opacity:.62,scale:20,blur:2.35,far:8,resolution:384}),(0,X.jsx)(Pe,{view:e.cameraView,resetToken:e.resetToken,motion:e.cameraMotion})]})}var Qe=class extends q.Component{constructor(...e){super(...e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e){this.props.onError(e)}render(){return this.state.error?(0,X.jsxs)(`div`,{className:`webgl-fallback`,children:[(0,X.jsx)(`strong`,{children:`3D 戰場暫時無法啟動`}),(0,X.jsx)(`button`,{onClick:this.props.onFallback,children:`改用 2D 棋盤繼續`})]}):this.props.children}};function $e(e){let[t,n]=(0,q.useState)(null),r=t===e.theme,i=(0,q.useMemo)(()=>()=>n(e.theme),[e.theme]);return(0,X.jsx)(Qe,{onFallback:e.onFallback,onError:e=>M({component:`scene`,event:`render_error`,correlationId:P(`webgl`),error:e.message}),children:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(E,{className:`xiangqi-canvas`,shadows:e.quality===`cinematic`,dpr:e.quality===`cinematic`?[1,1.5]:[1,1.2],camera:{position:[12.8,7.2,16.2],fov:39,near:.1,far:90},gl:{antialias:!0,alpha:!1,powerPreference:`high-performance`},onCreated:({gl:t})=>{t.outputColorSpace=a,t.toneMapping=4,t.toneMappingExposure=e.brightness,M({component:`scene`,event:`webgl_ready`,correlationId:P(`webgl`),result:{renderer:t.info.render,theme:e.theme,quality:e.quality}})},onPointerMissed:t=>{t.type===`click`&&e.onDeselect()},children:(0,X.jsx)(Ze,{...e,onBackdropReady:i})}),!r&&(0,X.jsxs)(`div`,{className:`scene-loading scene-loading-overlay`,role:`status`,children:[(0,X.jsx)(`i`,{}),(0,X.jsxs)(`span`,{children:[(0,X.jsx)(`small`,{children:`PREPARING THE REALM`}),(0,X.jsxs)(`strong`,{children:[F[e.theme].label,`列陣中`]})]})]})]})})}export{F as REALM_THEMES,$e as default};