import{r as e}from"./rolldown-runtime-D0yXDDFE.js";import{a as t,o as n}from"./framework-Dm2LD62T.js";import{t as r}from"./sitePath-yR_Sue8-.js";import{B as i,C as a,F as o,G as s,H as c,I as l,L as u,S as d,U as f,W as p,_ as m,a as h,g,i as _,l as v,m as y,n as ee,q as te,r as b,s as x,t as ne,u as S,v as C,x as w,y as re}from"./react-three-fiber.esm-BX06Xg76.js";import{n as ie,r as T,t as ae}from"./ContactShadows-BjvyrPPD.js";import{a as E,m as oe,n as D,t as O}from"./xiangqiSceneConfig-DG3_81GG.js";var se=parseInt(`180`.replace(/\D+/g,``)),ce=se>=125?`uv1`:`uv2`,le=new x,k=new p,A=class extends g{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new y([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new y([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new m(t,6,1);return this.setAttribute(`instanceStart`,new C(n,3,0)),this.setAttribute(`instanceEnd`,new C(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new m(n,t*2,1);return this.setAttribute(`instanceColorStart`,new C(r,t,0)),this.setAttribute(`instanceColorEnd`,new C(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new te(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new x);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),le.setFromBufferAttribute(t),this.boundingBox.union(le))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new u),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)k.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(k)),k.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(k));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}applyMatrix(e){return console.warn(`THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().`),this.applyMatrix4(e)}},ue=class extends A{constructor(){super(),this.isLineGeometry=!0,this.type=`LineGeometry`}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(t===3)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}},j=class extends l{constructor(e){super({type:`LineMaterial`,uniforms:c.clone(c.merge([h.common,h.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new f(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
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
					#include <${se>=154?`colorspace_fragment`:`encodings_fragment`}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA=`1`:delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return`WORLD_UNITS`in this.defines},set:function(e){e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return`USE_DASH`in this.defines},set(e){!!e!=`USE_DASH`in this.defines&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return`USE_ALPHA_TO_COVERAGE`in this.defines},set:function(e){!!e!=`USE_ALPHA_TO_COVERAGE`in this.defines&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE=``,this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}},M=new s,de=new p,fe=new p,N=new s,P=new s,F=new s,I=new p,L=new d,R=new re,pe=new p,z=new x,B=new u,V=new s,H,U;function me(e,t,n){return V.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),V.multiplyScalar(1/V.w),V.x=U/n.width,V.y=U/n.height,V.applyMatrix4(e.projectionMatrixInverse),V.multiplyScalar(1/V.w),Math.abs(Math.max(V.x,V.y))}function he(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){R.start.fromBufferAttribute(i,r),R.end.fromBufferAttribute(a,r),R.applyMatrix4(n);let o=new p,s=new p;H.distanceSqToSegment(R.start,R.end,s,o),s.distanceTo(o)<U*.5&&t.push({point:s,pointOnLine:o,distance:H.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,[ce]:null})}}function ge(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,s=o.attributes.instanceStart,c=o.attributes.instanceEnd,l=Math.min(o.instanceCount,s.count),u=-t.near;H.at(1,F),F.w=1,F.applyMatrix4(t.matrixWorldInverse),F.applyMatrix4(r),F.multiplyScalar(1/F.w),F.x*=i.x/2,F.y*=i.y/2,F.z=0,I.copy(F),L.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=l;t<o;t++){if(N.fromBufferAttribute(s,t),P.fromBufferAttribute(c,t),N.w=1,P.w=1,N.applyMatrix4(L),P.applyMatrix4(L),N.z>u&&P.z>u)continue;if(N.z>u){let e=N.z-P.z,t=(N.z-u)/e;N.lerp(P,t)}else if(P.z>u){let e=P.z-N.z,t=(P.z-u)/e;P.lerp(N,t)}N.applyMatrix4(r),P.applyMatrix4(r),N.multiplyScalar(1/N.w),P.multiplyScalar(1/P.w),N.x*=i.x/2,N.y*=i.y/2,P.x*=i.x/2,P.y*=i.y/2,R.start.copy(N),R.start.z=0,R.end.copy(P),R.end.z=0;let o=R.closestPointToPointParameter(I,!0);R.at(o,pe);let l=w.lerp(N.z,P.z,o),d=l>=-1&&l<=1,f=I.distanceTo(pe)<U*.5;if(d&&f){R.start.fromBufferAttribute(s,t),R.end.fromBufferAttribute(c,t),R.start.applyMatrix4(a),R.end.applyMatrix4(a);let r=new p,i=new p;H.distanceSqToSegment(R.start,R.end,i,r),n.push({point:i,pointOnLine:r,distance:H.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,[ce]:null})}}}var _e=class extends a{constructor(e=new A,t=new j({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)de.fromBufferAttribute(t,e),fe.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+de.distanceTo(fe);let i=new m(r,2,1);return e.setAttribute(`instanceDistanceStart`,new C(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new C(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`);let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;H=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;U=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),B.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?U*.5:me(r,Math.max(r.near,B.distanceToPoint(H.origin)),s.resolution),B.radius+=c,H.intersectsSphere(B)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),z.copy(o.boundingBox).applyMatrix4(a);let l;l=n?U*.5:me(r,Math.max(r.near,z.distanceToPoint(H.origin)),s.resolution),z.expandByScalar(l),H.intersectsBox(z)!==!1&&(n?he(this,t):ge(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(M),this.material.uniforms.resolution.value.set(M.z,M.w))}},ve=class extends _e{constructor(e=new ue,t=new j({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type=`Line2`}},W=e(t()),G=W.forwardRef(function({points:e,color:t=16777215,vertexColors:n,linewidth:r,lineWidth:i,segments:a,dashed:o,...c},l){var u;let d=_(e=>e.size),m=W.useMemo(()=>a?new _e:new ve,[a]),[h]=W.useState(()=>new j),g=(n==null||(u=n[0])==null?void 0:u.length)===4?4:3,v=W.useMemo(()=>{let r=a?new A:new ue,i=e.map(e=>{let t=Array.isArray(e);return e instanceof p||e instanceof s?[e.x,e.y,e.z]:e instanceof f?[e.x,e.y,0]:t&&e.length===3?[e[0],e[1],e[2]]:t&&e.length===2?[e[0],e[1],0]:e});if(r.setPositions(i.flat()),n){t=16777215;let e=n.map(e=>e instanceof S?e.toArray():e);r.setColors(e.flat(),g)}return r},[e,a,n,g]);return W.useLayoutEffect(()=>{m.computeLineDistances()},[e,m]),W.useLayoutEffect(()=>{o?h.defines.USE_DASH=``:delete h.defines.USE_DASH,h.needsUpdate=!0},[o,h]),W.useEffect(()=>()=>{v.dispose(),h.dispose()},[v]),W.createElement(`primitive`,T({object:m,ref:l},c),W.createElement(`primitive`,{object:v,attach:`geometry`}),W.createElement(`primitive`,T({object:h,attach:`material`,color:t,vertexColors:!!n,resolution:[d.width,d.height],linewidth:r??i??1,dashed:o,transparent:g===4},c)))}),ye=parseInt(`180`.replace(/\D+/g,``)),be=class extends l{constructor(){super({uniforms:{time:{value:0},pixelRatio:{value:1}},vertexShader:`
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
          #include <${ye>=154?`colorspace_fragment`:`encodings_fragment`}>
        }
      `})}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}get pixelRatio(){return this.uniforms.pixelRatio.value}set pixelRatio(e){this.uniforms.pixelRatio.value=e}},xe=e=>e&&e.constructor===Float32Array,Se=e=>[e.r,e.g,e.b],Ce=e=>e instanceof f||e instanceof p||e instanceof s,we=e=>Array.isArray(e)?e:Ce(e)?e.toArray():[e,e,e];function K(e,t,n){return W.useMemo(()=>{if(t!==void 0){if(xe(t))return t;if(t instanceof S){let n=Array.from({length:e*3},()=>Se(t)).flat();return Float32Array.from(n)}else if(Ce(t)||Array.isArray(t)){let n=Array.from({length:e*3},()=>we(t)).flat();return Float32Array.from(n)}return Float32Array.from({length:e},()=>t)}return Float32Array.from({length:e},n)},[t])}var Te=W.forwardRef(({noise:e=1,count:t=100,speed:n=1,opacity:r=1,scale:i=1,size:a,color:o,children:s,...c},l)=>{W.useMemo(()=>ee({SparklesImplMaterial:be}),[]);let u=W.useRef(null),d=_(e=>e.viewport.dpr),f=we(i),p=W.useMemo(()=>Float32Array.from(Array.from({length:t},()=>f.map(w.randFloatSpread)).flat()),[t,...f]),m=K(t,a,Math.random),h=K(t,r),g=K(t,n),v=K(t*3,e),y=K(o===void 0?t*3:t,xe(o)?o:new S(o),()=>1);return b(e=>{u.current&&u.current.material&&(u.current.material.time=e.clock.elapsedTime)}),W.useImperativeHandle(l,()=>u.current,[]),W.createElement(`points`,T({key:`particle-${t}-${JSON.stringify(i)}`},c,{ref:u}),W.createElement(`bufferGeometry`,null,W.createElement(`bufferAttribute`,{attach:`attributes-position`,args:[p,3]}),W.createElement(`bufferAttribute`,{attach:`attributes-size`,args:[m,1]}),W.createElement(`bufferAttribute`,{attach:`attributes-opacity`,args:[h,1]}),W.createElement(`bufferAttribute`,{attach:`attributes-speed`,args:[g,1]}),W.createElement(`bufferAttribute`,{attach:`attributes-color`,args:[y,3]}),W.createElement(`bufferAttribute`,{attach:`attributes-noise`,args:[v,3]})),s||W.createElement(`sparklesImplMaterial`,{transparent:!0,pixelRatio:d,depthWrite:!1}))}),q=(e,t)=>e.reduce((e,n,r)=>e+n*t[r],0),Ee=e=>{let t=Math.hypot(...e);return e.map(e=>e/t)},De=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]];function Oe(e,t){let n=Ee({red:[0,11,15],black:[0,11,-15],tactical:[0,1,.09],cinematic:[12,11,16]}[e]),r=Ee(De([0,1,0],n)),i=De(n,r),a=[0,.4,0],o=Math.tan(39*Math.PI/360),s=o*Math.max(.2,t),c=[-5.7,5.7].flatMap(e=>[-.4,2].flatMap(t=>[-6.4,6.4].map(n=>[e,t-a[1],n]))),l=Math.max(12,...c.flatMap(e=>[q(e,n)+Math.abs(q(e,r))/(s*.88),q(e,n)+Math.abs(q(e,i))/(o*.72)]))*1.03;return{position:n.map((e,t)=>e*l+a[t]),target:a,distance:l,direction:n,right:r,up:i,tanVertical:o,tanHorizontal:s,corners:c}}var J=n(),Y=new Map,ke={bamboo:`/xiangqi-bamboo-cinematic-v2.webp`,palace:`/xiangqi-palace-cinematic-v1.webp`,embers:`/xiangqi-embers-cinematic-v2.webp`,frost:`/xiangqi-frost-cinematic-v2.webp`};function X(e,t,n=`transparent`,r=256,i=!1){if(typeof document>`u`)return null;let a=`${e}|${t}|${n}|${r}|${i}`;if(Y.has(a))return Y.get(a);let s=document.createElement(`canvas`);s.width=r*(i?1:2),s.height=r;let c=s.getContext(`2d`);c.clearRect(0,0,s.width,s.height),n!==`transparent`&&(c.fillStyle=n,c.fillRect(0,0,s.width,s.height)),c.fillStyle=t,c.textAlign=`center`,c.textBaseline=`middle`,c.font=`700 ${Math.round(r*.62)}px "Noto Serif TC", "Microsoft JhengHei", serif`,c.shadowColor=`rgba(0,0,0,.55)`,c.shadowBlur=7,c.fillText(e,s.width/2,s.height/2+r*.03);let l=new v(s);return l.colorSpace=o,l.anisotropy=8,Y.set(a,l),l}function Ae({view:e,resetToken:t,motion:n}){let{camera:r,size:i}=_(),a=(0,W.useRef)(null),o=(0,W.useRef)(0);return(0,W.useEffect)(()=>{let o=Oe(e,i.width/Math.max(1,i.height)),s=a.current;s&&(s.autoRotate=!1,s.enableDamping=!1,s.update(),s.target.set(...o.target)),r.position.set(...o.position),r.lookAt(...o.target),s&&(s.update(),s.enableDamping=!0,s.autoRotate=n===`orbit`),E({component:`camera`,event:`preset_applied`,correlationId:D(`camera`),input:{view:e,resetToken:t,motion:n,aspect:Number((i.width/i.height).toFixed(2))},stateAfter:{position:r.position.toArray(),distance:o.distance}})},[r,n,t,i.height,i.width,e]),(0,J.jsx)(ie,{ref:a,makeDefault:!0,autoRotate:n===`orbit`,autoRotateSpeed:.48,enablePan:!1,enableDamping:!0,dampingFactor:.065,rotateSpeed:.58,zoomSpeed:.72,minDistance:8.8,maxDistance:120,minPolarAngle:.08,maxPolarAngle:1.3,target:[0,.35,0],onStart:()=>{o.current=performance.now(),E({component:`camera`,event:`gesture_start`,correlationId:D(`orbit`)})},onEnd:()=>E({component:`camera`,event:`gesture_end`,correlationId:D(`orbit`),elapsedMs:Math.round(performance.now()-o.current),result:{position:r.position.toArray().map(e=>Number(e.toFixed(2)))}})})}function Z({color:e}){return(0,J.jsx)(`meshPhysicalMaterial`,{color:e,metalness:.82,roughness:.2,clearcoat:.58,clearcoatRoughness:.16})}function je({kind:e,metal:t,armor:n}){return e===`K`?(0,J.jsxs)(`group`,{position:[0,1.04,0],children:[(0,J.jsxs)(`mesh`,{castShadow:!0,children:[(0,J.jsx)(`boxGeometry`,{args:[.31,.08,.22]}),(0,J.jsx)(Z,{color:t})]}),[-.12,0,.12].map((e,n)=>(0,J.jsxs)(`mesh`,{castShadow:!0,position:[e,.09+(n===1?.035:0),0],children:[(0,J.jsx)(`coneGeometry`,{args:[.045,.18,4]}),(0,J.jsx)(Z,{color:t})]},e))]}):e===`A`?(0,J.jsxs)(`group`,{position:[0,.64,-.1],children:[(0,J.jsxs)(`mesh`,{castShadow:!0,rotation:[0,0,.7],children:[(0,J.jsx)(`boxGeometry`,{args:[.055,.78,.055]}),(0,J.jsx)(Z,{color:t})]}),(0,J.jsxs)(`mesh`,{castShadow:!0,rotation:[0,0,-.7],children:[(0,J.jsx)(`boxGeometry`,{args:[.055,.78,.055]}),(0,J.jsx)(Z,{color:t})]}),(0,J.jsxs)(`mesh`,{castShadow:!0,position:[0,.34,0],children:[(0,J.jsx)(`octahedronGeometry`,{args:[.09,0]}),(0,J.jsx)(Z,{color:t})]})]}):e===`E`?(0,J.jsxs)(`group`,{position:[0,.68,.13],children:[[-.25,.25].map(e=>(0,J.jsxs)(`mesh`,{castShadow:!0,position:[e,0,.02],rotation:[Math.PI/2,0,e<0?-.22:.22],children:[(0,J.jsx)(`coneGeometry`,{args:[.045,.27,8]}),(0,J.jsx)(Z,{color:`#f4ddaa`})]},e)),(0,J.jsxs)(`mesh`,{castShadow:!0,position:[0,.23,-.02],scale:[1.2,.76,1],children:[(0,J.jsx)(`sphereGeometry`,{args:[.15,10,7]}),(0,J.jsx)(Z,{color:n})]})]}):e===`H`?(0,J.jsxs)(`group`,{position:[0,.95,.015],rotation:[-.1,0,0],children:[(0,J.jsxs)(`mesh`,{castShadow:!0,position:[0,.02,.035],scale:[.85,1.3,1],children:[(0,J.jsx)(`sphereGeometry`,{args:[.15,10,7]}),(0,J.jsx)(Z,{color:n})]}),[-.07,.07].map(e=>(0,J.jsxs)(`mesh`,{castShadow:!0,position:[e,.18,0],rotation:[0,0,e<0?.12:-.12],children:[(0,J.jsx)(`coneGeometry`,{args:[.035,.16,7]}),(0,J.jsx)(Z,{color:t})]},e)),(0,J.jsxs)(`mesh`,{castShadow:!0,position:[0,-.05,.16],rotation:[Math.PI/2,0,0],children:[(0,J.jsx)(`capsuleGeometry`,{args:[.045,.17,3,7]}),(0,J.jsx)(Z,{color:n})]})]}):e===`R`?(0,J.jsxs)(`group`,{position:[0,.91,-.06],children:[(0,J.jsxs)(`mesh`,{castShadow:!0,children:[(0,J.jsx)(`boxGeometry`,{args:[.42,.18,.16]}),(0,J.jsx)(Z,{color:n})]}),[-.16,0,.16].map(e=>(0,J.jsxs)(`mesh`,{castShadow:!0,position:[e,.16,0],children:[(0,J.jsx)(`boxGeometry`,{args:[.09,.18,.16]}),(0,J.jsx)(Z,{color:t})]},e))]}):e===`C`?(0,J.jsxs)(`group`,{position:[.27,.62,.02],rotation:[0,0,-.18],children:[(0,J.jsxs)(`mesh`,{castShadow:!0,rotation:[0,0,Math.PI/2],children:[(0,J.jsx)(`cylinderGeometry`,{args:[.065,.095,.58,10]}),(0,J.jsx)(Z,{color:t})]}),(0,J.jsxs)(`mesh`,{castShadow:!0,position:[-.24,-.1,0],children:[(0,J.jsx)(`boxGeometry`,{args:[.18,.12,.2]}),(0,J.jsx)(Z,{color:n})]})]}):(0,J.jsxs)(`group`,{position:[.27,.65,-.02],rotation:[0,0,-.12],children:[(0,J.jsxs)(`mesh`,{castShadow:!0,children:[(0,J.jsx)(`capsuleGeometry`,{args:[.035,.78,3,7]}),(0,J.jsx)(Z,{color:t})]}),(0,J.jsxs)(`mesh`,{castShadow:!0,position:[0,.49,0],children:[(0,J.jsx)(`coneGeometry`,{args:[.075,.22,6]}),(0,J.jsx)(Z,{color:t})]})]})}function Me({piece:e}){let t=e.side===`red`,n=t?{dark:`#4b070b`,armor:`#c4262e`,bright:`#ff5946`,metal:`#ffd06a`,glow:`#ff3425`,glyph:`#fff0bf`}:{dark:`#020508`,armor:`#11262e`,bright:`#59d9d0`,metal:`#dcfff9`,glow:`#56f5e3`,glyph:`#effffc`},r=(0,W.useMemo)(()=>X(oe[e.side][e.kind],n.glyph,`transparent`,192),[n.glyph,e.kind,e.side]);return(0,J.jsxs)(`group`,{rotation:[0,t?0:Math.PI,0],children:[(0,J.jsxs)(`mesh`,{castShadow:!0,receiveShadow:!0,position:[0,.055,0],children:[(0,J.jsx)(`boxGeometry`,{args:[.62,.11,.52]}),(0,J.jsx)(`meshPhysicalMaterial`,{color:n.dark,metalness:.48,roughness:.3,clearcoat:.68,clearcoatRoughness:.2})]}),(0,J.jsxs)(`mesh`,{castShadow:!0,position:[0,.13,0],children:[(0,J.jsx)(`boxGeometry`,{args:[.51,.07,.43]}),(0,J.jsx)(`meshPhysicalMaterial`,{color:n.bright,metalness:.62,roughness:.24,clearcoat:.66,clearcoatRoughness:.16,emissive:n.glow,emissiveIntensity:t?.18:.58})]}),[-.13,.13].map(e=>(0,J.jsxs)(`mesh`,{castShadow:!0,position:[e,.235,.015],children:[(0,J.jsx)(`boxGeometry`,{args:[.13,.24,.18]}),(0,J.jsx)(`meshStandardMaterial`,{color:n.dark,metalness:.55,roughness:.32})]},e)),(0,J.jsxs)(`mesh`,{castShadow:!0,position:[0,.43,0],children:[(0,J.jsx)(`cylinderGeometry`,{args:[.2,.31,.39,6]}),(0,J.jsx)(`meshPhysicalMaterial`,{color:n.armor,metalness:.5,roughness:.28,clearcoat:.55,clearcoatRoughness:.19,emissive:n.glow,emissiveIntensity:t?.06:.13})]}),(0,J.jsxs)(`mesh`,{castShadow:!0,position:[0,.665,0],scale:[1,1.08,.8],children:[(0,J.jsx)(`capsuleGeometry`,{args:[.205,.16,3,8]}),(0,J.jsx)(`meshPhysicalMaterial`,{color:n.bright,metalness:.58,roughness:.22,clearcoat:.62,clearcoatRoughness:.16,emissive:n.glow,emissiveIntensity:t?.075:.15})]}),(0,J.jsxs)(`mesh`,{castShadow:!0,position:[0,.755,0],children:[(0,J.jsx)(`boxGeometry`,{args:[.46,.065,.23]}),(0,J.jsx)(`meshPhysicalMaterial`,{color:n.bright,metalness:.58,roughness:.22,clearcoat:.58,emissive:n.glow,emissiveIntensity:t?.42:.72})]}),(0,J.jsxs)(`mesh`,{position:[0,.792,0],children:[(0,J.jsx)(`boxGeometry`,{args:[.33,.012,.16]}),(0,J.jsx)(`meshBasicMaterial`,{color:t?`#ff4938`:`#64f7e8`,toneMapped:!1})]}),[-.255,.255].map(e=>(0,J.jsxs)(`mesh`,{castShadow:!0,position:[e,.69,0],scale:[1.25,.76,1],children:[(0,J.jsx)(`sphereGeometry`,{args:[.13,9,6]}),(0,J.jsx)(Z,{color:n.metal})]},e)),(0,J.jsxs)(`mesh`,{castShadow:!0,position:[0,.895,0],children:[(0,J.jsx)(`sphereGeometry`,{args:[.14,10,7]}),(0,J.jsx)(`meshStandardMaterial`,{color:`#b88665`,metalness:.08,roughness:.6})]}),(0,J.jsxs)(`mesh`,{castShadow:!0,position:[0,.955,-.018],scale:[1.16,.76,1.04],children:[(0,J.jsx)(`sphereGeometry`,{args:[.15,10,7]}),(0,J.jsx)(`meshPhysicalMaterial`,{color:n.dark,metalness:.68,roughness:.24,clearcoat:.45})]}),(0,J.jsxs)(`mesh`,{position:[0,.67,.184],children:[(0,J.jsx)(`planeGeometry`,{args:[.36,.18]}),(0,J.jsx)(`meshBasicMaterial`,{map:r,transparent:!0,toneMapped:!1,depthWrite:!1})]}),(0,J.jsx)(je,{kind:e.kind,metal:n.metal,armor:n.armor})]})}function Ne({color:e}){return(0,J.jsx)(G,{points:[[0,.028,-.56],[.56,.028,0],[0,.028,.56],[-.56,.028,0],[0,.028,-.56]],color:e,lineWidth:2.4,transparent:!0,opacity:.96})}function Pe({piece:e,active:t}){let n=(0,W.useMemo)(()=>X(oe[e.side][e.kind],`#fff9e5`,e.side===`red`?`#8c211e`:`#152a2b`,160,!0),[e.kind,e.side]);return(0,J.jsx)(`sprite`,{position:[0,1.6,0],scale:t?[.9,.9,1]:[.8,.8,1],renderOrder:20,children:(0,J.jsx)(`spriteMaterial`,{map:n,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1})})}function Fe({piece:e,selected:t,checked:n,showBadge:r,onChoose:i}){let a=(0,W.useRef)(null),[o,s]=(0,W.useState)(!1),c=e.side===`red`,l=(0,W.useMemo)(()=>new p(e.x-4,.18,e.y-4.5),[e.x,e.y]);return(0,W.useEffect)(()=>(document.body.style.cursor=o?`pointer`:`default`,()=>{document.body.style.cursor=`default`}),[o]),b(({clock:e},n)=>{if(!a.current)return;let r=1-8e-4**n;a.current.position.x=w.lerp(a.current.position.x,l.x,r),a.current.position.z=w.lerp(a.current.position.z,l.z,r);let i=Math.abs(a.current.position.x-l.x)+Math.abs(a.current.position.z-l.z),o=t?.39+Math.sin(e.elapsedTime*4)*.035:.18+Math.min(.28,i*.18);a.current.position.y=w.lerp(a.current.position.y,o,r),a.current.rotation.y=w.lerp(a.current.rotation.y,t?Math.sin(e.elapsedTime*1.4)*.06:0,r)}),(0,J.jsxs)(`group`,{ref:a,position:[l.x,l.y,l.z],onClick:t=>{t.stopPropagation(),!(t.delta>6)&&i(e.x,e.y,D(`piece`))},onPointerOver:e=>{e.stopPropagation(),s(!0)},onPointerOut:()=>s(!1),children:[(t||n)&&(0,J.jsx)(`pointLight`,{color:n?`#ff3a21`:c?`#ff6247`:`#69ebc0`,intensity:n?4.5:2.8,distance:3.4,position:[0,.72,0]}),(0,J.jsx)(Me,{piece:e}),r&&(0,J.jsx)(Pe,{piece:e,active:t||o||n}),(t||o||n)&&(0,J.jsx)(Ne,{color:n?`#ff3822`:c?`#ff7458`:`#59e5d2`})]})}function Ie({x:e,y:t,legal:n,occupied:r,palette:i,onChoose:a}){return(0,J.jsxs)(`group`,{position:[e-4,.09,t-4.5],children:[(0,J.jsxs)(`mesh`,{onClick:n=>{n.stopPropagation(),!(n.delta>6)&&a(e,t,D(`point`))},children:[(0,J.jsx)(`boxGeometry`,{args:[1,.08,1]}),(0,J.jsx)(`meshBasicMaterial`,{transparent:!0,opacity:0,depthWrite:!1})]}),n&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(`mesh`,{rotation:[Math.PI/2,0,0],position:[0,.075,0],children:[(0,J.jsx)(`torusGeometry`,{args:[r?.48:.24,r?.04:.06,10,42]}),(0,J.jsx)(`meshBasicMaterial`,{color:r?`#ff5a3e`:i.accent,transparent:!0,opacity:.96,toneMapped:!1})]}),(0,J.jsx)(`pointLight`,{color:r?`#ff492f`:i.accent,intensity:1.35,distance:1.4,position:[0,.22,0]})]})]})}function Le({move:e,palette:t}){let n=[e.from.x-4,.115,e.from.y-4.5],r=[e.to.x-4,.115,e.to.y-4.5];return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(G,{points:[n,r],color:t.metal,lineWidth:1.5,transparent:!0,opacity:.48,dashed:!0,dashSize:.15,gapSize:.12}),[n,r].map((e,n)=>(0,J.jsxs)(`mesh`,{position:e,rotation:[Math.PI/2,0,0],children:[(0,J.jsx)(`ringGeometry`,{args:[n?.34:.24,n?.42:.3,40]}),(0,J.jsx)(`meshBasicMaterial`,{color:n?t.accent:t.metal,transparent:!0,opacity:n?.62:.34,toneMapped:!1})]},n))]})}function Re({point:e,color:t}){let n=(0,W.useRef)(null),r=(0,W.useRef)([]),i=(0,W.useRef)(null);return b(({clock:e})=>{if(!n.current)return;i.current===null&&(i.current=e.elapsedTime);let t=Math.min(1,(e.elapsedTime-i.current)/1.15);n.current.scale.setScalar(.25+t*2.3),r.current.forEach(e=>{e.opacity=Math.max(0,(1-t)*.85)}),n.current.visible=t<1}),(0,J.jsxs)(`group`,{ref:n,position:[e.x-4,.2,e.y-4.5],children:[[0,.22,.44].map((e,n)=>(0,J.jsxs)(`mesh`,{position:[0,e,0],rotation:[Math.PI/2,0,0],children:[(0,J.jsx)(`torusGeometry`,{args:[.22+n*.1,.035,8,36]}),(0,J.jsx)(`meshBasicMaterial`,{ref:e=>{e&&(r.current[n]=e)},color:t,transparent:!0,toneMapped:!1})]},e)),(0,J.jsx)(`pointLight`,{color:t,intensity:7,distance:4})]})}function ze(e){let t=(0,W.useMemo)(()=>X(`楚河`,`#cfe4db`,`transparent`,256),[]),n=(0,W.useMemo)(()=>X(`漢界`,`#f0d49b`,`transparent`,256),[]),r=(0,W.useMemo)(()=>{let e=[];for(let t=0;t<10;t++)e.push([[-4,.074,t-4.5],[4,.074,t-4.5]]);for(let t=-4;t<=4;t++)Math.abs(t)===4?e.push([[t,.074,-4.5],[t,.074,4.5]]):(e.push([[t,.074,-4.5],[t,.074,-.5]]),e.push([[t,.074,.5],[t,.074,4.5]]));return e.push([[-1,.076,-4.5],[1,.076,-2.5]],[[1,.076,-4.5],[-1,.076,-2.5]],[[-1,.076,2.5],[1,.076,4.5]],[[1,.076,2.5],[-1,.076,4.5]]),e},[]);return(0,J.jsxs)(`group`,{children:[(0,J.jsxs)(`mesh`,{receiveShadow:!0,position:[0,-.5,0],children:[(0,J.jsx)(`boxGeometry`,{args:[10.9,.62,12.4]}),(0,J.jsx)(`meshStandardMaterial`,{color:e.palette.floor,metalness:.68,roughness:.24})]}),(0,J.jsxs)(`mesh`,{receiveShadow:!0,position:[0,-.17,0],children:[(0,J.jsx)(`boxGeometry`,{args:[10.25,.24,11.7]}),(0,J.jsx)(`meshStandardMaterial`,{color:e.palette.wood,metalness:.42,roughness:.36})]}),(0,J.jsxs)(`mesh`,{receiveShadow:!0,position:[0,-.02,0],children:[(0,J.jsx)(`boxGeometry`,{args:[9.45,.12,10.65]}),(0,J.jsx)(`meshStandardMaterial`,{color:e.palette.metal,metalness:.35,roughness:.42})]}),(0,J.jsxs)(`mesh`,{receiveShadow:!0,position:[0,.05,0],rotation:[-Math.PI/2,0,0],children:[(0,J.jsx)(`planeGeometry`,{args:[8.62,9.62]}),(0,J.jsx)(`meshStandardMaterial`,{color:e.palette.board,metalness:.04,roughness:.76})]}),(0,J.jsxs)(`mesh`,{position:[0,.064,0],rotation:[-Math.PI/2,0,0],children:[(0,J.jsx)(`planeGeometry`,{args:[8.05,1]}),(0,J.jsx)(`meshStandardMaterial`,{color:e.palette.river,metalness:.18,roughness:.62,transparent:!0,opacity:.82})]}),r.map((t,n)=>(0,J.jsx)(G,{points:t,color:e.palette.line,lineWidth:1.15,transparent:!0,opacity:.9},n)),[{x:-2.15,texture:t},{x:2.15,texture:n}].map(({x:e,texture:t})=>(0,J.jsxs)(`mesh`,{position:[e,.087,0],rotation:[-Math.PI/2,0,0],children:[(0,J.jsx)(`planeGeometry`,{args:[2.25,.58]}),(0,J.jsx)(`meshBasicMaterial`,{map:t,transparent:!0,toneMapped:!1})]},e)),e.lastMove&&(0,J.jsx)(Le,{move:e.lastMove,palette:e.palette}),Array.from({length:90},(t,n)=>{let r=n%9,i=Math.floor(n/9);return(0,J.jsx)(Ie,{x:r,y:i,legal:e.legal.some(e=>e.x===r&&e.y===i),occupied:e.board.some(e=>e.x===r&&e.y===i),palette:e.palette,onChoose:e.onChoose},n)}),e.board.map(t=>(0,J.jsx)(Fe,{piece:t,selected:t.id===e.selectedId,checked:t.kind===`K`&&t.side===e.checkSide,showBadge:e.showBadges,onChoose:e.onChoose},t.id)),e.captureEffects&&e.capturePoint&&e.captureToken>0&&(0,J.jsx)(Re,{point:e.capturePoint,color:e.palette.ember},e.captureToken),[[-4.92,-5.58],[4.92,-5.58],[-4.92,5.58],[4.92,5.58]].map(([t,n],r)=>(0,J.jsxs)(`group`,{position:[t,.04,n],children:[(0,J.jsxs)(`mesh`,{castShadow:!0,children:[(0,J.jsx)(`cylinderGeometry`,{args:[.21,.29,.45,10]}),(0,J.jsx)(`meshStandardMaterial`,{color:e.palette.wood,metalness:.74,roughness:.24})]}),(0,J.jsxs)(`mesh`,{castShadow:!0,position:[0,.32,0],children:[(0,J.jsx)(`sphereGeometry`,{args:[.18,12,9]}),(0,J.jsx)(`meshStandardMaterial`,{color:e.palette.metal,metalness:.84,roughness:.18})]})]},r))]})}function Be({color:e}){let t=(0,W.useRef)(null);return b(({clock:e})=>{t.current&&(t.current.scale.y=1+Math.sin(e.elapsedTime*8+t.current.position.x)*.16,t.current.rotation.y+=.014)}),(0,J.jsxs)(`group`,{ref:t,position:[0,.72,0],children:[(0,J.jsxs)(`mesh`,{position:[0,.12,0],children:[(0,J.jsx)(`sphereGeometry`,{args:[.24,14,10]}),(0,J.jsx)(`meshBasicMaterial`,{color:e,transparent:!0,opacity:.72,toneMapped:!1})]}),(0,J.jsxs)(`mesh`,{position:[0,.38,0],children:[(0,J.jsx)(`coneGeometry`,{args:[.18,.76,12]}),(0,J.jsx)(`meshBasicMaterial`,{color:e,transparent:!0,opacity:.9,toneMapped:!1})]}),(0,J.jsxs)(`mesh`,{position:[0,.31,.02],scale:[.48,.76,.48],children:[(0,J.jsx)(`sphereGeometry`,{args:[.22,12,8]}),(0,J.jsx)(`meshBasicMaterial`,{color:`#ffd99a`,transparent:!0,opacity:.95,toneMapped:!1})]})]})}function Q({x:e,z:t,side:n}){let r=(0,W.useRef)(null),i=(0,W.useMemo)(()=>X(n===`red`?`楚`:`漢`,`#f6dda1`,n===`red`?`#6c1712`:`#0b4b3d`,192),[n]);return b(({clock:t})=>{r.current&&(r.current.rotation.z=Math.sin(t.elapsedTime*.7+e)*.025)}),(0,J.jsxs)(`group`,{position:[e,3.1,t],children:[(0,J.jsxs)(`mesh`,{castShadow:!0,position:[0,.7,0],children:[(0,J.jsx)(`cylinderGeometry`,{args:[.035,.035,2.6,8]}),(0,J.jsx)(`meshStandardMaterial`,{color:`#9a763e`,metalness:.8,roughness:.24})]}),(0,J.jsx)(`group`,{ref:r,children:(0,J.jsxs)(`mesh`,{castShadow:!0,position:[0,.1,0],children:[(0,J.jsx)(`planeGeometry`,{args:[1.2,2.15,1,6]}),(0,J.jsx)(`meshStandardMaterial`,{map:i,side:2,metalness:.08,roughness:.82})]})})]})}function Ve({theme:e,quality:t,onReady:n}){let{scene:a,size:s}=_(),[c,l]=(0,W.useState)(null);return(0,W.useEffect)(()=>{let a=!0,s=D(`environment`),c=performance.now();return E({component:`scene`,event:`environment_load_started`,correlationId:s,input:{theme:e}}),new i().load(r(ke[e]),e=>{e.colorSpace=o,e.anisotropy=t===`cinematic`?8:2,a&&(l(e),window.requestAnimationFrame(n),E({component:`scene`,event:`environment_load_succeeded`,correlationId:s,elapsedMs:Math.round(performance.now()-c),result:{width:e.image?.width,height:e.image?.height}}))},void 0,e=>{E({component:`scene`,event:`environment_load_failed`,correlationId:s,elapsedMs:Math.round(performance.now()-c),error:e instanceof Error?e.message:String(e)}),a&&n()}),()=>{a=!1}},[n,t,e]),(0,W.useEffect)(()=>(a.backgroundIntensity=t===`cinematic`?1.45:1.12,()=>{a.backgroundIntensity=1}),[t,a]),(0,W.useEffect)(()=>{if(!c||!c.image||s.width<=0||s.height<=0)return;let e=c.image,t=e.width/e.height,n=s.width/s.height;if(n<t){let e=n/t;c.repeat.set(e,1),c.offset.set((1-e)/2,0)}else{let e=t/n;c.repeat.set(1,e),c.offset.set(0,(1-e)/2)}c.needsUpdate=!0},[s.height,s.width,c]),c?(c.colorSpace=o,c.needsUpdate=!0,(0,J.jsx)(`primitive`,{object:c,attach:`background`})):null}function He({x:e,z:t,side:n,palette:r}){let i=n===`red`?`#8b281e`:`#17483d`;return(0,J.jsxs)(`group`,{position:[e,.42,t],rotation:[0,e<0?.36:-.36,0],children:[(0,J.jsxs)(`mesh`,{castShadow:!0,rotation:[0,0,Math.PI/2],children:[(0,J.jsx)(`cylinderGeometry`,{args:[.82,.82,.54,32]}),(0,J.jsx)(`meshStandardMaterial`,{color:i,metalness:.08,roughness:.68})]}),[-.29,.29].map(e=>(0,J.jsxs)(`mesh`,{position:[e,0,0],rotation:[0,Math.PI/2,0],children:[(0,J.jsx)(`torusGeometry`,{args:[.73,.065,12,48]}),(0,J.jsx)(`meshStandardMaterial`,{color:r.metal,metalness:.78,roughness:.22})]},e)),(0,J.jsxs)(`mesh`,{castShadow:!0,position:[0,-.78,0],children:[(0,J.jsx)(`boxGeometry`,{args:[1.5,.16,.32]}),(0,J.jsx)(`meshStandardMaterial`,{color:r.wood,roughness:.72})]}),[-.58,.58].map(e=>(0,J.jsxs)(`mesh`,{castShadow:!0,position:[e,-.39,0],rotation:[0,0,e<0?-.16:.16],children:[(0,J.jsx)(`boxGeometry`,{args:[.14,.8,.2]}),(0,J.jsx)(`meshStandardMaterial`,{color:r.wood,roughness:.72})]},e))]})}function $({x:e,z:t,palette:n,intensity:r}){return(0,J.jsxs)(`group`,{position:[e,.12,t],children:[(0,J.jsxs)(`mesh`,{castShadow:!0,position:[0,.23,0],children:[(0,J.jsx)(`cylinderGeometry`,{args:[.62,.42,.42,20]}),(0,J.jsx)(`meshStandardMaterial`,{color:`#17100c`,metalness:.7,roughness:.32})]}),(0,J.jsxs)(`mesh`,{position:[0,.48,0],rotation:[Math.PI/2,0,0],children:[(0,J.jsx)(`torusGeometry`,{args:[.53,.085,12,36]}),(0,J.jsx)(`meshStandardMaterial`,{color:n.metal,metalness:.84,roughness:.22})]}),(0,J.jsx)(Be,{color:n.ember}),(0,J.jsx)(`pointLight`,{color:n.ember,intensity:r,distance:10,position:[0,1.1,0]})]})}function Ue({palette:e}){return(0,J.jsxs)(`group`,{children:[(0,J.jsxs)(`mesh`,{receiveShadow:!0,position:[0,-.78,0],children:[(0,J.jsx)(`boxGeometry`,{args:[20,.2,20]}),(0,J.jsx)(`meshStandardMaterial`,{color:e.floor,metalness:.12,roughness:.92})]}),(0,J.jsxs)(`mesh`,{receiveShadow:!0,position:[0,-.65,0],children:[(0,J.jsx)(`boxGeometry`,{args:[14.8,.16,14.8]}),(0,J.jsx)(`meshStandardMaterial`,{color:`#292722`,metalness:.08,roughness:.88})]})]})}function We({theme:e,quality:t,palette:n,onBackdropReady:r}){let i=(0,W.useMemo)(()=>Array.from({length:t===`cinematic`?18:10},(e,n)=>({x:(n<(t===`cinematic`?9:5)?-1:1)*(9.1+n%5*.7),z:-8+n%9*2,h:5.4+n%4*1.05,r:-.07+n%3*.055})),[t]);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ve,{theme:e,quality:t,onReady:r}),(0,J.jsx)(Ue,{palette:n}),e===`bamboo`&&i.map((e,t)=>(0,J.jsxs)(`group`,{position:[e.x,e.h/2-.5,e.z],rotation:[0,0,e.r],children:[(0,J.jsxs)(`mesh`,{castShadow:!0,children:[(0,J.jsx)(`cylinderGeometry`,{args:[.09,.14,e.h,14]}),(0,J.jsx)(`meshStandardMaterial`,{color:t%2?`#102d22`:`#28553c`,roughness:.9})]}),[-.42,.12,.54].map(t=>(0,J.jsxs)(`group`,{position:[0,e.h*.18+t,0],children:[(0,J.jsxs)(`mesh`,{position:[-.28,0,0],rotation:[0,0,-.92],children:[(0,J.jsx)(`coneGeometry`,{args:[.14,.95,8]}),(0,J.jsx)(`meshStandardMaterial`,{color:`#2b6244`,roughness:.94})]}),(0,J.jsxs)(`mesh`,{position:[.28,.08,0],rotation:[0,0,.92],children:[(0,J.jsx)(`coneGeometry`,{args:[.14,.95,8]}),(0,J.jsx)(`meshStandardMaterial`,{color:`#1d4934`,roughness:.94})]})]},t))]},t)),e===`frost`&&Array.from({length:10},(e,t)=>(0,J.jsxs)(`mesh`,{castShadow:!0,position:[(t%2?-1:1)*(9.4+t%3*.9),-.22,-7.4+t*1.55],rotation:[t*.17,t*.7,.18],children:[(0,J.jsx)(`dodecahedronGeometry`,{args:[.48+t%3*.12,1]}),(0,J.jsx)(`meshStandardMaterial`,{color:`#6fa8b4`,metalness:.34,roughness:.28,emissive:`#174356`,emissiveIntensity:.24})]},t)),e===`embers`&&Array.from({length:11},(e,t)=>(0,J.jsxs)(`mesh`,{castShadow:!0,position:[(t%2?-1:1)*(9.1+t%3),-.2,-7.5+t*1.5],rotation:[0,t*.7,.15],children:[(0,J.jsx)(`dodecahedronGeometry`,{args:[.38+t%3*.14,1]}),(0,J.jsx)(`meshStandardMaterial`,{color:`#26100d`,roughness:.95,emissive:`#5e130b`,emissiveIntensity:.24})]},t)),(0,J.jsx)($,{x:-7.1,z:-6.2,palette:n,intensity:e===`embers`?13:7.5}),(0,J.jsx)($,{x:7.1,z:-6.2,palette:n,intensity:e===`embers`?13:7.5}),(0,J.jsx)($,{x:-7.1,z:6.2,palette:n,intensity:e===`embers`?13:7.5}),(0,J.jsx)($,{x:7.1,z:6.2,palette:n,intensity:e===`embers`?13:7.5}),(0,J.jsx)(He,{x:-8.7,z:3.6,side:`red`,palette:n}),(0,J.jsx)(He,{x:8.7,z:-3.6,side:`black`,palette:n}),(0,J.jsx)(Q,{x:-8.2,z:0,side:`red`}),(0,J.jsx)(Q,{x:8.2,z:0,side:`black`}),(0,J.jsx)(Te,{count:t===`cinematic`?92:46,scale:[24,10,24],size:t===`cinematic`?1.8:1.2,speed:e===`embers`?.7:.22,color:e===`frost`?`#bceeff`:n.metal,opacity:e===`embers`?.52:.34})]})}function Ge({brightness:e}){let{gl:t}=_();return(0,W.useEffect)(()=>{t.toneMappingExposure=e},[e,t]),null}function Ke(e){let t=O[e.theme].palette,{size:n}=_(),r=n.width<=700;return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ge,{brightness:e.brightness}),(0,J.jsx)(`color`,{attach:`background`,args:[t.background]}),(0,J.jsx)(`fog`,{attach:`fog`,args:[t.fog,r?22:e.theme===`embers`?12:15,r?62:35]}),(0,J.jsx)(`ambientLight`,{intensity:r?1.02:e.theme===`embers`?.52:.68,color:t.key}),(0,J.jsx)(`hemisphereLight`,{intensity:r?1.16:.82,color:t.key,groundColor:t.floor}),(0,J.jsx)(`directionalLight`,{castShadow:e.quality===`cinematic`,position:[-6,12,8],intensity:r?4.15:3.1,color:t.key,"shadow-mapSize":[e.quality===`cinematic`?1536:768,e.quality===`cinematic`?1536:768],"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),(0,J.jsx)(`pointLight`,{position:[7,8,-8],intensity:13,distance:28,color:t.fill}),(0,J.jsx)(`pointLight`,{position:[-7,5,8],intensity:10,distance:22,color:t.ember}),(0,J.jsx)(We,{theme:e.theme,quality:e.quality,palette:t,onBackdropReady:e.onBackdropReady}),(0,J.jsx)(ze,{...e,palette:t}),e.quality===`cinematic`&&(0,J.jsx)(ae,{position:[0,-.76,0],opacity:.62,scale:20,blur:2.35,far:8,resolution:384}),(0,J.jsx)(Ae,{view:e.cameraView,resetToken:e.resetToken,motion:e.cameraMotion})]})}var qe=class extends W.Component{constructor(...e){super(...e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e){this.props.onError(e)}render(){return this.state.error?(0,J.jsxs)(`div`,{className:`webgl-fallback`,children:[(0,J.jsx)(`strong`,{children:`3D 戰場暫時無法啟動`}),(0,J.jsx)(`button`,{onClick:this.props.onFallback,children:`改用 2D 棋盤繼續`})]}):this.props.children}};function Je(e){let[t,n]=(0,W.useState)(null),r=t===e.theme,i=(0,W.useMemo)(()=>()=>n(e.theme),[e.theme]);return(0,J.jsx)(qe,{onFallback:e.onFallback,onError:e=>E({component:`scene`,event:`render_error`,correlationId:D(`webgl`),error:e.message}),children:(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(ne,{className:`xiangqi-canvas`,shadows:e.quality===`cinematic`,dpr:e.quality===`cinematic`?[1,1.5]:[1,1.2],camera:{position:[12.8,7.2,16.2],fov:39,near:.1,far:90},gl:{antialias:!0,alpha:!1,powerPreference:`high-performance`},onCreated:({gl:t})=>{t.outputColorSpace=o,t.toneMapping=4,t.toneMappingExposure=e.brightness,E({component:`scene`,event:`webgl_ready`,correlationId:D(`webgl`),result:{renderer:t.info.render,theme:e.theme,quality:e.quality}})},onPointerMissed:t=>{t.type===`click`&&e.onDeselect()},children:(0,J.jsx)(Ke,{...e,onBackdropReady:i})}),!r&&(0,J.jsxs)(`div`,{className:`scene-loading scene-loading-overlay`,role:`status`,children:[(0,J.jsx)(`i`,{}),(0,J.jsxs)(`span`,{children:[(0,J.jsx)(`small`,{children:`PREPARING THE REALM`}),(0,J.jsxs)(`strong`,{children:[O[e.theme].label,`列陣中`]})]})]})]})})}export{O as REALM_THEMES,Je as default};