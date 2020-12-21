
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;
var keyboard={};
var usuario = { height: 2.8, speed: 0.2, turnSpeed: Math.PI * 0.05 }

function init() {
	var canvasWidth = window.innerWidth * 0.9;
	var canvasHeight = window.innerHeight * 0.9;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 150, window.innerWidth / window.innerHeight, 1, 80000 );
	camera.position.set(-1,0.5,2.8);
	camera.lookAt(0,0,0);
	camera.scale.x=0.1;
	camera.scale.y=0.1;
	camera.scale.z=0.1;	

	// LIGHTS

	light = new THREE.DirectionalLight( 0xFFFFFF, 0.7 );
	light.position.set( 1, 1, 1 );
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()

	var ambientLight = new THREE.AmbientLight( 0x111111 );

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0x681F68, 1.0 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	//objetos
	var cuadradogrande=new THREE.Geometry();
	cuadradogrande.vertices.push(new THREE.Vector3(-2,-1,2));
	cuadradogrande.vertices.push(new THREE.Vector3(2,-1,2));
	cuadradogrande.vertices.push(new THREE.Vector3(2,-0.9,2));
	cuadradogrande.vertices.push(new THREE.Vector3(-2,-0.9,2));

	cuadradogrande.vertices.push(new THREE.Vector3(-2,-0.9,-2));
	cuadradogrande.vertices.push(new THREE.Vector3(2,-0.9,-2));
	cuadradogrande.vertices.push(new THREE.Vector3(2,-1,-2));
	cuadradogrande.vertices.push(new THREE.Vector3(-2,-1,-2));

	cuadradogrande.vertices.push(new THREE.Vector3(-2,-1,-2));
	cuadradogrande.vertices.push(new THREE.Vector3(-2,-1,2));
	cuadradogrande.vertices.push(new THREE.Vector3(-2,-0.9,2));
	cuadradogrande.vertices.push(new THREE.Vector3(-2,-0.9,-2));

	cuadradogrande.vertices.push(new THREE.Vector3(2,-1,2));
	cuadradogrande.vertices.push(new THREE.Vector3(2,-1,-2));
	cuadradogrande.vertices.push(new THREE.Vector3(2,-0.9,-2));
	cuadradogrande.vertices.push(new THREE.Vector3(2,-0.9,2));

	cuadradogrande.vertices.push(new THREE.Vector3(-2,-1,-2));
	cuadradogrande.vertices.push(new THREE.Vector3(2,-1,-2));
	cuadradogrande.vertices.push(new THREE.Vector3(2,-1,2));
	cuadradogrande.vertices.push(new THREE.Vector3(-2,-1,2));

	cuadradogrande.vertices.push(new THREE.Vector3(-2,-0.9,2));
	cuadradogrande.vertices.push(new THREE.Vector3(2,-0.9,2));
	cuadradogrande.vertices.push(new THREE.Vector3(2,-0.9,-2));
	cuadradogrande.vertices.push(new THREE.Vector3(-2,-0.9,-2));


	cuadradogrande.faces.push( new THREE.Face3( 0, 1, 2) );
	cuadradogrande.faces.push( new THREE.Face3(0,2,3) );
	cuadradogrande.faces.push( new THREE.Face3( 4,5,6));
	cuadradogrande.faces.push( new THREE.Face3( 4,6,7));
	cuadradogrande.faces.push( new THREE.Face3( 8,9,10));
	cuadradogrande.faces.push( new THREE.Face3( 8,10,11));
	cuadradogrande.faces.push( new THREE.Face3( 12,13,14));
	cuadradogrande.faces.push( new THREE.Face3( 12,14,15));
	cuadradogrande.faces.push( new THREE.Face3( 16,17,18));
	cuadradogrande.faces.push( new THREE.Face3( 16,18,19));
	cuadradogrande.faces.push( new THREE.Face3( 20,21,22));
	cuadradogrande.faces.push( new THREE.Face3( 20,22,23));
	
	var cuadradograndeDel=new THREE.Geometry();
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2,-0.9,2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2.1,-0.9,2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2.1,2,2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2,2,2));

	cuadradograndeDel.vertices.push(new THREE.Vector3(-2,2,-2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2.1,2,-2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2.1,-0.9,-2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2,-0.9,-2));

	cuadradograndeDel.vertices.push(new THREE.Vector3(-2,-0.9,-2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2,-0.9,2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2,2,2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2,2,-2));

	cuadradograndeDel.vertices.push(new THREE.Vector3(-2.1,-0.9,2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2.1,-0.9,-2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2.1,2,-2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2.1,2,2));

	cuadradograndeDel.vertices.push(new THREE.Vector3(-2,-0.9,-2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2.1,-0.9,-2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2.1,-0.9,2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2,-0.9,2));

	cuadradograndeDel.vertices.push(new THREE.Vector3(-2,2,2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2.1,2,2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2.1,2,-2));
	cuadradograndeDel.vertices.push(new THREE.Vector3(-2,2,-2));

	cuadradograndeDel.faces.push( new THREE.Face3( 0, 1, 2) );
	cuadradograndeDel.faces.push( new THREE.Face3(0,2,3) );
	cuadradograndeDel.faces.push( new THREE.Face3( 4,5,6));
	cuadradograndeDel.faces.push( new THREE.Face3( 4,6,7));
	cuadradograndeDel.faces.push( new THREE.Face3( 8,9,10));
	cuadradograndeDel.faces.push( new THREE.Face3( 8,10,11));
	cuadradograndeDel.faces.push( new THREE.Face3( 12,13,14));
	cuadradograndeDel.faces.push( new THREE.Face3( 12,14,15));
	cuadradograndeDel.faces.push( new THREE.Face3( 16,17,18));
	cuadradograndeDel.faces.push( new THREE.Face3( 16,18,19));
	cuadradograndeDel.faces.push( new THREE.Face3( 20,21,22));
	cuadradograndeDel.faces.push( new THREE.Face3( 20,22,23));

	var cuadradopqueño=new THREE.Geometry();
	cuadradopqueño.vertices.push(new THREE.Vector3(-0.8,0.0,-1.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(0.8,0.0,-1.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(0.8,-0.2,-1.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(-0.8,-0.2,-0.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(0.8,-0.2,-0.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(0.8,0.0,-0.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(-0.8,0.0,-0.5));

	cuadradopqueño.vertices.push(new THREE.Vector3(-0.8,0.0,-0.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(-0.8,0.0,-1.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(-0.8,-0.2,-0.5));

	cuadradopqueño.vertices.push(new THREE.Vector3(0.8,0.0,-1.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(0.8,0.0,-0.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(0.8,-0.2,-0.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(0.8,-0.2,-1.5));

	cuadradopqueño.vertices.push(new THREE.Vector3(-0.8,0.0,-0.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(0.8,0.0,-0.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(0.8,0.0,-1.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(-0.8,0.0,-1.5));

	cuadradopqueño.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(0.8,-0.2,-1.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(0.8,-0.2,-0.5));
	cuadradopqueño.vertices.push(new THREE.Vector3(-0.8,-0.2,-0.5));

	cuadradopqueño.faces.push( new THREE.Face3( 0, 1, 2) );
	cuadradopqueño.faces.push( new THREE.Face3(0,2,3) );
	cuadradopqueño.faces.push( new THREE.Face3( 4,5,6));
	cuadradopqueño.faces.push( new THREE.Face3( 4,6,7));
	cuadradopqueño.faces.push( new THREE.Face3( 8,9,10));
	cuadradopqueño.faces.push( new THREE.Face3( 8,10,11));
	cuadradopqueño.faces.push( new THREE.Face3( 12,13,14));
	cuadradopqueño.faces.push( new THREE.Face3( 12,14,15));
	cuadradopqueño.faces.push( new THREE.Face3( 16,17,18));
	cuadradopqueño.faces.push( new THREE.Face3( 16,18,19));
	cuadradopqueño.faces.push( new THREE.Face3( 20,21,22));
	cuadradopqueño.faces.push( new THREE.Face3( 20,22,23));

	var cuadradolargo=new THREE.Geometry();
	cuadradolargo.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.5));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.7,-0.2,-1.5));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.7,-0.9,-1.5));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.8,-0.9,-1.5));

	cuadradolargo.vertices.push(new THREE.Vector3(-0.8,-0.9,-1.4));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.7,-0.9,-1.4));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.7,-0.2,-1.4));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.4));

	cuadradolargo.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.4));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.5));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.8,-0.9,-1.5));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.8,-0.9,-1.4));

	cuadradolargo.vertices.push(new THREE.Vector3(-0.7,-0.2,-1.5));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.7,-0.2,-1.4));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.7,-0.9,-1.4));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.7,-0.9,-1.5));

	cuadradolargo.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.4));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.7,-0.2,-1.4));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.7,-0.2,-1.5));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.8,-0.2,-1.5));

	cuadradolargo.vertices.push(new THREE.Vector3(-0.8,-0.9,-1.5));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.7,-0.9,-1.5));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.7,-0.9,-1.4));
	cuadradolargo.vertices.push(new THREE.Vector3(-0.8,-0.9,-1.4));

	cuadradolargo.faces.push( new THREE.Face3( 0, 1, 2) );
	cuadradolargo.faces.push( new THREE.Face3(0,2,3) );
	cuadradolargo.faces.push( new THREE.Face3( 4,5,6));
	cuadradolargo.faces.push( new THREE.Face3( 4,6,7));
	cuadradolargo.faces.push( new THREE.Face3( 8,9,10));
	cuadradolargo.faces.push( new THREE.Face3( 8,10,11));
	cuadradolargo.faces.push( new THREE.Face3( 12,13,14));
	cuadradolargo.faces.push( new THREE.Face3( 12,14,15));
	cuadradolargo.faces.push( new THREE.Face3( 16,17,18));
	cuadradolargo.faces.push( new THREE.Face3( 16,18,19));
	cuadradolargo.faces.push( new THREE.Face3( 20,21,22));
	cuadradolargo.faces.push( new THREE.Face3( 20,22,23));
	//colores
	var negro = new THREE.MeshBasicMaterial( { color: 0x000000 } ); 
	var negro1 = new THREE.MeshBasicMaterial( { color: 0x397E89 } ); 
	var crema = new THREE.MeshBasicMaterial( { color: 0xEEF0B3 } );
	var plomo=new THREE.MeshBasicMaterial({ color: 0x8A887D });
	var plomooscuro=new THREE.MeshBasicMaterial({ color: 0x4E4D4B });
	var rojo= new THREE.MeshBasicMaterial({ color: 0xDD272E});
	var plomoclaro=new THREE.MeshBasicMaterial({ color: 0xCFCBCE});
	var celeste =new THREE.MeshBasicMaterial({ color: 0x28D7D7 });
	var celeste1 =new THREE.MeshBasicMaterial({ color: 0x0FA5A5 });
	var azul=new THREE.MeshBasicMaterial({ color: 0x223AEC });
	var azuloscuro=new THREE.MeshBasicMaterial({ color: 0x061482 });
	var rosa=new THREE.MeshBasicMaterial({ color: 0xE4ADE9});
	var verdeclaro=new THREE.MeshBasicMaterial({ color: 0x88DD27 });
	var verdeoscuro=new THREE.MeshBasicMaterial({ color: 0x2B5B1B });
	var lila=new THREE.MeshBasicMaterial({ color: 0x8527DD });
	var mostaza=new THREE.MeshBasicMaterial({ color: 0xDDD327 });
	var blanco=new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
	var cafe=new THREE.MeshBasicMaterial({ color: 0x7E4A1B });
	var cafeclaro=new THREE.MeshBasicMaterial({ color: 0xBC783B });

	//piso
	var piso=new THREE.Mesh(cuadradogrande,plomo);
	piso.scale.x=3;
	piso.scale.z=3;
	//techo
	var techo=new THREE.Mesh(cuadradogrande,plomo);
	techo.scale.x=3;
	techo.scale.z=3;
	techo.position.y=3;
	//pared1
	var pared1= new THREE.Mesh(cuadradograndeDel,crema);
	pared1.scale.x=3;
	pared1.scale.z=3;
	//pared2
	var pared2= new THREE.Mesh(cuadradograndeDel,crema);
	pared2.scale.x=3;
	pared2.scale.z=3;
	pared2.position.x=12.3;
	//pared3
	var pared3= new THREE.Mesh(cuadradograndeDel,crema);
	pared3.scale.x=3;
	pared3.scale.z=3;
	pared3.rotation.y=-1.57;
	pared3.position.z=0.03;
	//pared4
	var pared4= new THREE.Mesh(cuadradograndeDel,crema);
	pared4.scale.x=3;
	pared4.scale.z=3;
	pared4.rotation.y=-1.57;
	pared4.position.z=12.29;
	//mesa3
	var mesa= new THREE.Mesh(cuadradopqueño,cafe);
	mesa.scale.z=7;
	mesa.position.z=8;
	//patas0
	var mesa01=new THREE.Mesh(cuadradolargo,cafe);
	mesa01.position.x=5.2;
	mesa01.position.z=-0.8;
	var mesa02=new THREE.Mesh(cuadradolargo,cafe);
	mesa02.position.x=5.2;
	mesa02.position.z=1.8;
	var mesa03=new THREE.Mesh(cuadradolargo,cafe);
	mesa03.position.x=5.2;
	mesa03.position.z=3.8;
	var mesa04=new THREE.Mesh(cuadradolargo,cafe);
	mesa04.position.x=5.2;
	mesa04.position.z=5.8;
	var mesa05=new THREE.Mesh(cuadradolargo,cafe);
	mesa05.position.x=6.6;
	mesa05.position.z=-0.8;
	var mesa06=new THREE.Mesh(cuadradolargo,cafe);
	mesa06.position.x=6.6;
	mesa06.position.z=1.8;
	var mesa07=new THREE.Mesh(cuadradolargo,cafe);
	mesa07.position.x=6.6;
	mesa07.position.z=3.8;
	var mesa08=new THREE.Mesh(cuadradolargo,cafe);
	mesa08.position.x=6.6;
	mesa08.position.z=5.8;


	//mesa1
	var mesa1=new THREE.Mesh(cuadradopqueño,cafe);
	mesa1.scale.z=7;
	mesa1.position.z=8;
	mesa1.position.x=5.1;
	//patas1
	var mesa11=new THREE.Mesh(cuadradolargo,cafe);
	mesa11.position.z=-0.8;
	var mesa12=new THREE.Mesh(cuadradolargo,cafe);
	mesa12.position.z=1.8;
	var mesa13=new THREE.Mesh(cuadradolargo,cafe);
	mesa13.position.z=3.8;
	var mesa14=new THREE.Mesh(cuadradolargo,cafe);
	mesa14.position.z=5.8;
	var mesa15=new THREE.Mesh(cuadradolargo,cafe);
	mesa15.position.z=-0.8;
	mesa15.position.x=1.5;
	var mesa16=new THREE.Mesh(cuadradolargo,cafe);
	mesa16.position.z=1.8;
	mesa16.position.x=1.5;
	var mesa17=new THREE.Mesh(cuadradolargo,cafe);
	mesa17.position.z=3.8;
	mesa17.position.x=1.5;
	var mesa18=new THREE.Mesh(cuadradolargo,cafe);
	mesa18.position.z=5.8;
	mesa18.position.x=1.5;
	//mesa2
	var mesa2=new THREE.Mesh(cuadradopqueño,cafe);
	mesa2.scale.z=7;
	mesa2.position.z=8;
	mesa2.position.x=-5.1;
	//patas2
	var mesa21=new THREE.Mesh(cuadradolargo,cafe);
	mesa21.position.x=-5.1;
	mesa21.position.z=-0.8;
	var mesa22=new THREE.Mesh(cuadradolargo,cafe);
	mesa22.position.x=-5.1;
	mesa22.position.z=1.8;
	var mesa23=new THREE.Mesh(cuadradolargo,cafe);
	mesa23.position.x=-5.1;
	mesa23.position.z=3.8;
	var mesa24=new THREE.Mesh(cuadradolargo,cafe);
	mesa24.position.x=-5.1;
	mesa24.position.z=5.8;

	var mesa25=new THREE.Mesh(cuadradolargo,cafe);
	mesa25.position.x=-3.7;
	mesa25.position.z=-0.8;
	var mesa26=new THREE.Mesh(cuadradolargo,cafe);
	mesa26.position.x=-3.7;
	mesa26.position.z=1.8;
	var mesa27=new THREE.Mesh(cuadradolargo,cafe);
	mesa27.position.x=-3.7;
	mesa27.position.z=3.8;
	var mesa28=new THREE.Mesh(cuadradolargo,cafe);
	mesa28.position.x=-3.7;
	mesa28.position.z=5.8;
	//ESCRITORIO
	var mesa3=new THREE.Mesh(cuadradopqueño,cafe);
	mesa3.position.x=-5.0;
	mesa3.position.z=-3;
	mesa3.scale.z=1.4;
	var mesa31=new THREE.Mesh(cuadradopqueño,cafeclaro);
	mesa31.position.x=-5.0;
	mesa31.position.z=-3;
	mesa31.position.y=-0.2;
	mesa31.scale.z=1.3;
	mesa31.scale.y=3.8;
	//silla1 para la mesa 1
	var silla1=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla1.scale.y=0.6;
	silla1.position.x=1.5;
	silla1.position.y=-0.4;
	silla1.position.z=-0.3;
	var silla11=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla11.scale.y=0.6;
	silla11.position.x=1.5;
	silla11.position.y=-0.4;
	silla11.position.z=0.2;
	var silla1T=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla1T.scale.y=0.6;
	silla1T.position.x=2.0;
	silla1T.position.y=-0.4;
	silla1T.position.z=-0.3;
	var silla1T1=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla1T1.scale.y=0.6;
	silla1T1.position.x=2.0;
	silla1T1.position.y=-0.4;
	silla1T1.position.z=0.2;
	var silla1S=new THREE.Mesh(cuadradopqueño,cafe);
	silla1S.scale.y=0.3;
	silla1S.scale.x=0.4;
	silla1S.scale.z=0.6;
	silla1S.position.y=-0.46;
	silla1S.position.x=1;
	silla1S.position.z=-0.9;
	var silla1S1=new THREE.Mesh(cuadradopqueño,cafe);
	silla1S1.scale.y=0.3;
	silla1S1.scale.x=0.4;
	silla1S1.scale.z=0.6;
	silla1S1.position.y=-0.2;
	silla1S1.position.x=1.28;
	silla1S1.position.z=-0.9;
	silla1S1.rotation.z=1.5;

	//silla2
	var silla2=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla2.scale.y=0.6;
	silla2.position.x=1.5;
	silla2.position.y=-0.4;
	silla2.position.z=0.7;
	var silla22=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla22.scale.y=0.6;
	silla22.position.x=1.5;
	silla22.position.y=-0.4;
	silla22.position.z=1.2;
	var silla2T=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla2T.scale.y=0.6;
	silla2T.position.x=2.0;
	silla2T.position.y=-0.4;
	silla2T.position.z=0.7;
	var silla2T2=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla2T2.scale.y=0.6;
	silla2T2.position.x=2.0;
	silla2T2.position.y=-0.4;
	silla2T2.position.z=1.2;
	var silla2S=new THREE.Mesh(cuadradopqueño,cafe);
	silla2S.scale.y=0.3;
	silla2S.scale.x=0.4;
	silla2S.scale.z=0.6;
	silla2S.position.y=-0.46;
	silla2S.position.x=1;
	silla2S.position.z=0.1;
	var silla2S2=new THREE.Mesh(cuadradopqueño,cafe);
	silla2S2.scale.y=0.3;
	silla2S2.scale.x=0.4;
	silla2S2.scale.z=0.6;
	silla2S2.position.y=-0.2;
	silla2S2.position.x=1.28;
	silla2S2.position.z=0.1;
	silla2S2.rotation.z=1.5;
	
	//silla3
	var silla3=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla3.scale.y=0.6;
	silla3.position.x=1.5;
	silla3.position.y=-0.4;
	silla3.position.z=2.1;
	var silla33=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla33.scale.y=0.6;
	silla33.position.x=1.5;
	silla33.position.y=-0.4;
	silla33.position.z=2.6;
	var silla3T=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla3T.scale.y=0.6;
	silla3T.position.x=2.0;
	silla3T.position.y=-0.4;
	silla3T.position.z=2.1;
	var silla3T3=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla3T3.scale.y=0.6;
	silla3T3.position.x=2.0;
	silla3T3.position.y=-0.4;
	silla3T3.position.z=2.6;
	var silla3S=new THREE.Mesh(cuadradopqueño,cafe);
	silla3S.scale.y=0.3;
	silla3S.scale.x=0.4;
	silla3S.scale.z=0.6;
	silla3S.position.y=-0.46;
	silla3S.position.x=1;
	silla3S.position.z=1.5;
	var silla3S3=new THREE.Mesh(cuadradopqueño,cafe);
	silla3S3.scale.z=2;
	silla3S3.scale.y=0.3;
	silla3S3.scale.x=0.4;
	silla3S3.scale.z=0.6;
	silla3S3.position.y=-0.2;
	silla3S3.position.x=1.28;
	silla3S3.position.z=1.5;
	silla3S3.rotation.z=1.5;

	//silla4
	var silla4=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla4.scale.y=0.6;
	silla4.position.x=1.5;
	silla4.position.y=-0.4;
	silla4.position.z=3.1;
	var silla44=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla44.scale.y=0.6;
	silla44.position.x=1.5;
	silla44.position.y=-0.4;
	silla44.position.z=3.6;
	var silla4T=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla4T.scale.y=0.6;
	silla4T.position.x=2.0;
	silla4T.position.y=-0.4;
	silla4T.position.z=3.1;
	var silla4T4=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla4T4.scale.y=0.6;
	silla4T4.position.x=2.0;
	silla4T4.position.y=-0.4;
	silla4T4.position.z=3.6;
	var silla4S=new THREE.Mesh(cuadradopqueño,cafe);
	silla4S.scale.y=0.3;
	silla4S.scale.x=0.4;
	silla4S.scale.z=0.6;
	silla4S.position.y=-0.46;
	silla4S.position.x=1;
	silla4S.position.z=2.5;
	var silla4S4=new THREE.Mesh(cuadradopqueño,cafe);
	silla4S4.scale.z=2;
	silla4S4.scale.y=0.3;
	silla4S4.scale.x=0.4;
	silla4S4.scale.z=0.6;
	silla4S4.position.y=-0.2;
	silla4S4.position.x=1.28;
	silla4S4.position.z=2.5;
	silla4S4.rotation.z=1.5;
	//silla5
	var silla5=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla5.scale.y=0.6;
	silla5.position.x=1.5;
	silla5.position.y=-0.4;
	silla5.position.z=4.1;
	var silla55=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla55.scale.y=0.6;
	silla55.position.x=1.5;
	silla55.position.y=-0.4;
	silla55.position.z=4.6;
	var silla5T=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla5T.scale.y=0.6;
	silla5T.position.x=2.0;
	silla5T.position.y=-0.4;
	silla5T.position.z=4.1;
	var silla5T5=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla5T5.scale.y=0.6;
	silla5T5.position.x=2.0;
	silla5T5.position.y=-0.4;
	silla5T5.position.z=4.6;
	var silla5S=new THREE.Mesh(cuadradopqueño,cafe);
	silla5S.scale.y=0.3;
	silla5S.scale.x=0.4;
	silla5S.scale.z=0.6;
	silla5S.position.y=-0.46;
	silla5S.position.x=1;
	silla5S.position.z=3.5;
	var silla5S5=new THREE.Mesh(cuadradopqueño,cafe);
	silla5S5.scale.z=2;
	silla5S5.scale.y=0.3;
	silla5S5.scale.x=0.4;
	silla5S5.scale.z=0.6;
	silla5S5.position.y=-0.2;
	silla5S5.position.x=1.28;
	silla5S5.position.z=3.5;
	silla5S5.rotation.z=1.5;
	//silla6
	var silla6=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla6.scale.y=0.6;
	silla6.position.x=1.5;
	silla6.position.y=-0.4;
	silla6.position.z=5.1;
	var silla66=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla66.scale.y=0.6;
	silla66.position.x=1.5;
	silla66.position.y=-0.4;
	silla66.position.z=5.6;
	var silla6T=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla6T.scale.y=0.6;
	silla6T.position.x=2.0;
	silla6T.position.y=-0.4;
	silla6T.position.z=5.1;
	var silla6T6=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla6T6.scale.y=0.6;
	silla6T6.position.x=2.0;
	silla6T6.position.y=-0.4;
	silla6T6.position.z=5.6;
	var silla6S=new THREE.Mesh(cuadradopqueño,cafe);
	silla6S.scale.y=0.3;
	silla6S.scale.x=0.4;
	silla6S.scale.z=0.6;
	silla6S.position.y=-0.46;
	silla6S.position.x=1;
	silla6S.position.z=4.5;
	var silla6S6=new THREE.Mesh(cuadradopqueño,cafe);
	silla6S6.scale.z=2;
	silla6S6.scale.y=0.3;
	silla6S6.scale.x=0.4;
	silla6S6.scale.z=0.6;
	silla6S6.position.y=-0.2;
	silla6S6.position.x=1.28;
	silla6S6.position.z=4.5;
	silla6S6.rotation.z=1.5;
	//silla7
	var silla7=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla7.scale.y=0.6;
	silla7.position.y=-0.4;
	silla7.position.z=-0.3;
	var silla77=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla77.scale.y=0.6;
	silla77.position.y=-0.4;
	silla77.position.z=0.2;
	var silla7T=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla7T.scale.y=0.6;
	silla7T.position.y=-0.4;
	silla7T.position.z=-0.3;
	silla7T.position.x=-0.5;
	var silla7T7=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla7T7.scale.y=0.6;
	silla7T7.position.y=-0.4;
	silla7T7.position.z=0.2;
	silla7T7.position.x=-0.5;
	var silla7S=new THREE.Mesh(cuadradopqueño,cafe);
	silla7S.scale.y=0.3;
	silla7S.scale.x=0.4;
	silla7S.scale.z=0.6;
	silla7S.position.y=-0.46;
	silla7S.position.x=-1;
	silla7S.position.z=-0.9;
	var silla7S7=new THREE.Mesh(cuadradopqueño,cafe);
	silla7S7.scale.z=2;
	silla7S7.scale.y=0.3;
	silla7S7.scale.x=0.4;
	silla7S7.scale.z=0.6;
	silla7S7.position.y=-0.2;
	silla7S7.position.x=-1.3;
	silla7S7.position.z=-0.9;
	silla7S7.rotation.z=1.5;
	//silla8
	var silla8=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla8.scale.y=0.6;
	silla8.position.y=-0.4;
	silla8.position.z=0.7;
	var silla88=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla88.scale.y=0.6;
	silla88.position.y=-0.4;
	silla88.position.z=1.2;
	var silla8T=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla8T.scale.y=0.6;
	silla8T.position.y=-0.4;
	silla8T.position.z=0.7;
	silla8T.position.x=-0.5;
	var silla8T8=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla8T8.scale.y=0.6;
	silla8T8.position.y=-0.4;
	silla8T8.position.z=1.2;
	silla8T8.position.x=-0.5;
	var silla8S=new THREE.Mesh(cuadradopqueño,cafe);
	silla8S.scale.y=0.3;
	silla8S.scale.x=0.4;
	silla8S.scale.z=0.6;
	silla8S.position.y=-0.46;
	silla8S.position.x=-1;
	silla8S.position.z=0.1;
	var silla8S8=new THREE.Mesh(cuadradopqueño,cafe);
	silla8S8.scale.z=2;
	silla8S8.scale.y=0.3;
	silla8S8.scale.x=0.4;
	silla8S8.scale.z=0.6;
	silla8S8.position.y=-0.2;
	silla8S8.position.x=-1.3;
	silla8S8.position.z=0.1;
	silla8S8.rotation.z=1.5;
	//silla9
	var silla9=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla9.scale.y=0.6;
	silla9.position.y=-0.4;
	silla9.position.z=2.1;
	var silla99=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla99.scale.y=0.6;
	silla99.position.y=-0.4;
	silla99.position.z=2.6;
	var silla9T=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla9T.scale.y=0.6;
	silla9T.position.y=-0.4;
	silla9T.position.z=2.1;
	silla8T.position.x=-0.5;
	var silla9T9=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla9T9.scale.y=0.6;
	silla9T9.position.y=-0.4;
	silla9T9.position.z=2.6;
	silla9T9.position.x=-0.5;
	var silla9S=new THREE.Mesh(cuadradopqueño,cafe);
	silla9S.scale.y=0.3;
	silla9S.scale.x=0.4;
	silla9S.scale.z=0.6;
	silla9S.position.y=-0.46;
	silla9S.position.x=-1;
	silla9S.position.z=1.5;
	var silla9S9=new THREE.Mesh(cuadradopqueño,cafe);
	silla9S9.scale.z=2;
	silla9S9.scale.y=0.3;
	silla9S9.scale.x=0.4;
	silla9S9.scale.z=0.6;
	silla9S9.position.y=-0.2;
	silla9S9.position.x=-1.3;
	silla9S9.position.z=1.5;
	silla9S9.rotation.z=1.5;
	//silla10
	var silla10=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla10.scale.y=0.6;
	silla10.position.y=-0.4;
	silla10.position.z=3.1;
	var silla1010=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla1010.scale.y=0.6;
	silla1010.position.y=-0.4;
	silla1010.position.z=3.6;
	var silla10T=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla10T.scale.y=0.6;
	silla10T.position.y=-0.4;
	silla10T.position.z=3.1;
	silla10T.position.x=-0.5;
	var silla10T10=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla10T10.scale.y=0.6;
	silla10T10.position.y=-0.4;
	silla10T10.position.z=3.6;
	silla10T10.position.x=-0.5;
	var silla10S=new THREE.Mesh(cuadradopqueño,cafe);
	silla10S.scale.y=0.3;
	silla10S.scale.x=0.4;
	silla10S.scale.z=0.6;
	silla10S.position.y=-0.46;
	silla10S.position.x=-1;
	silla10S.position.z=2.5;
	var silla10S10=new THREE.Mesh(cuadradopqueño,cafe);
	silla10S10.scale.z=2;
	silla10S10.scale.y=0.3;
	silla10S10.scale.x=0.4;
	silla10S10.scale.z=0.6;
	silla10S10.position.y=-0.2;
	silla10S10.position.x=-1.3;
	silla10S10.position.z=2.5;
	silla10S10.rotation.z=1.5;
	//silla11
	var silla111=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla111.scale.y=0.6;
	silla111.position.y=-0.4;
	silla111.position.z=4.1;
	var silla11111=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla11111.scale.y=0.6;
	silla11111.position.y=-0.4;
	silla11111.position.z=4.6;
	var silla11T=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla11T.scale.y=0.6;
	silla11T.position.y=-0.4;
	silla11T.position.z=4.1;
	silla11T.position.x=-0.5;
	var silla11T11=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla11T11.scale.y=0.6;
	silla11T11.position.y=-0.4;
	silla11T11.position.z=4.6;
	silla11T11.position.x=-0.5;
	var silla11S=new THREE.Mesh(cuadradopqueño,cafe);
	silla11S.scale.y=0.3;
	silla11S.scale.x=0.4;
	silla11S.scale.z=0.6;
	silla11S.position.y=-0.46;
	silla11S.position.x=-1;
	silla11S.position.z=3.5;
	var silla11S11=new THREE.Mesh(cuadradopqueño,cafe);
	silla11S11.scale.z=2;
	silla11S11.scale.y=0.3;
	silla11S11.scale.x=0.4;
	silla11S11.scale.z=0.6;
	silla11S11.position.y=-0.2;
	silla11S11.position.x=-1.3;
	silla11S11.position.z=3.5;
	silla11S11.rotation.z=1.5;
	//silla12
	var silla12=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla12.scale.y=0.6;
	silla12.position.y=-0.4;
	silla12.position.z=5.1;

	var silla1212=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla1212.scale.y=0.6;
	silla1212.position.y=-0.4;
	silla1212.position.z=5.6;

	var silla12T=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla12T.scale.y=0.6;
	silla12T.position.y=-0.4;
	silla12T.position.z=5.1;
	silla12T.position.x=-0.5;
	var silla12T12=new THREE.Mesh(cuadradolargo,cafeclaro);
	silla12T12.scale.y=0.6;
	silla12T12.position.y=-0.4;
	silla12T12.position.z=5.6;
	silla12T12.position.x=-0.5;
	var silla12S=new THREE.Mesh(cuadradopqueño,cafe);
	silla12S.scale.y=0.3;
	silla12S.scale.x=0.4;
	silla12S.scale.z=0.6;
	silla12S.position.y=-0.46;
	silla12S.position.x=-1;
	silla12S.position.z=4.5;
	var silla12S12=new THREE.Mesh(cuadradopqueño,cafe);
	silla12S12.scale.z=2;
	silla12S12.scale.y=0.3;
	silla12S12.scale.x=0.4;
	silla12S12.scale.z=0.6;
	silla12S12.position.y=-0.2;
	silla12S12.position.x=-1.3;
	silla12S12.position.z=4.5;
	silla12S12.rotation.z=1.5;

	//silla1 para la mesa2
	var sillaM21=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM21.position.x=-3.7;
	sillaM21.position.z=-0.3;
	sillaM21.scale.y=0.6;
	sillaM21.position.y=-0.4;
	var sillaM211=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM211.position.x=-3.7;
	sillaM211.position.z=0.2;
	sillaM211.scale.y=0.6;
	sillaM211.position.y=-0.4;
	var sillaM21T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM21T.position.x=-3.2;
	sillaM21T.position.z=-0.3;
	sillaM21T.scale.y=0.6;
	sillaM21T.position.y=-0.4;
	var sillaM211T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM211T.position.x=-3.2;
	sillaM211T.position.z=0.2;
	sillaM211T.scale.y=0.6;
	sillaM211T.position.y=-0.4;

	var sillaML2S=new THREE.Mesh(cuadradopqueño,cafe);
	sillaML2S.scale.y=0.3;
	sillaML2S.scale.x=0.4;
	sillaML2S.scale.z=0.6;
	sillaML2S.position.y=-0.46;
	sillaML2S.position.x=-4.2;
	sillaML2S.position.z=-0.9;
	var sillaM2S1=new THREE.Mesh(cuadradopqueño,cafe);
	sillaM2S1.scale.z=2;
	sillaM2S1.scale.y=0.3;
	sillaM2S1.scale.x=0.4;
	sillaM2S1.scale.z=0.6;
	sillaM2S1.position.y=-0.2;
	sillaM2S1.position.x=-3.92;
	sillaM2S1.position.z=-0.9;
	sillaM2S1.rotation.z=1.5;
	//silla2
	var sillaM22=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM22.position.x=-3.7;
	sillaM22.position.z=0.7;
	sillaM22.scale.y=0.6;
	sillaM22.position.y=-0.4;
	var sillaM222=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM222.position.x=-3.7;
	sillaM222.position.z=1.2;
	sillaM222.scale.y=0.6;
	sillaM222.position.y=-0.4;
	var sillaM22T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM22T.position.x=-3.2;
	sillaM22T.position.z=0.7;
	sillaM22T.scale.y=0.6;
	sillaM22T.position.y=-0.4;
	var sillaM222T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM222T.position.x=-3.2;
	sillaM222T.position.z=1.2;
	sillaM222T.scale.y=0.6;
	sillaM222T.position.y=-0.4;
	var sillaM2S=new THREE.Mesh(cuadradopqueño,cafe);
	sillaM2S.scale.y=0.3;
	sillaM2S.scale.x=0.4;
	sillaM2S.scale.z=0.6;
	sillaM2S.position.y=-0.46;
	sillaM2S.position.x=-4.2;
	sillaM2S.position.z=0.1;
	var sillaM2S2=new THREE.Mesh(cuadradopqueño,cafe);
	sillaM2S2.scale.y=0.3;
	sillaM2S2.scale.x=0.4;
	sillaM2S2.scale.z=0.6;
	sillaM2S2.position.y=-0.2;
	sillaM2S2.position.x=-3.92;
	sillaM2S2.position.z=0.1;
	sillaM2S2.rotation.z=1.5;

	//silla3
	var sillaM23=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM23.position.x=-3.7;
	sillaM23.position.z=2.1;
	sillaM23.scale.y=0.6;
	sillaM23.position.y=-0.4;
	var sillaM233=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM233.position.x=-3.7;
	sillaM233.position.z=2.6;
	sillaM233.scale.y=0.6;
	sillaM233.position.y=-0.4;
	var sillaM23T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM23T.position.x=-3.2;
	sillaM23T.position.z=2.1;
	sillaM23T.scale.y=0.6;
	sillaM23T.position.y=-0.4;
	var sillaM233T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM233T.position.x=-3.2;
	sillaM233T.position.z=2.6;
	sillaM233T.scale.y=0.6;
	sillaM233T.position.y=-0.4;
	var sillaM3S=new THREE.Mesh(cuadradopqueño,cafe);
	sillaM3S.scale.y=0.3;
	sillaM3S.scale.x=0.4;
	sillaM3S.scale.z=0.6;
	sillaM3S.position.y=-0.46;
	sillaM3S.position.x=-4.2;
	sillaM3S.position.z=1.5;
	var sillaM3S3=new THREE.Mesh(cuadradopqueño,cafe);
	sillaM3S3.scale.z=2;
	sillaM3S3.scale.y=0.3;
	sillaM3S3.scale.x=0.4;
	sillaM3S3.scale.z=0.6;
	sillaM3S3.position.y=-0.2;
	sillaM3S3.position.x=-3.92;
	sillaM3S3.position.z=1.5;
	sillaM3S3.rotation.z=1.5;
	//silla4
	var sillaM24=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM24.position.x=-3.7;
	sillaM24.position.z=3.1;
	sillaM24.scale.y=0.6;
	sillaM24.position.y=-0.4;
	var sillaM244=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM244.position.x=-3.7;
	sillaM244.position.z=3.6;
	sillaM244.scale.y=0.6;
	sillaM244.position.y=-0.4;
	var sillaM24T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM24T.position.x=-3.2;
	sillaM24T.position.z=3.1;
	sillaM24T.scale.y=0.6;
	sillaM24T.position.y=-0.4;
	var sillaM244T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM244T.position.x=-3.2;
	sillaM244T.position.z=3.6;
	sillaM244T.scale.y=0.6;
	sillaM244T.position.y=-0.4;
	var sillaM4S=new THREE.Mesh(cuadradopqueño,cafe);
	sillaM4S.scale.y=0.3;
	sillaM4S.scale.x=0.4;
	sillaM4S.scale.z=0.6;
	sillaM4S.position.y=-0.46;
	sillaM4S.position.x=-4.2;
	sillaM4S.position.z=2.5;
	var sillaM4S4=new THREE.Mesh(cuadradopqueño,cafe);
	sillaM4S4.scale.z=2;
	sillaM4S4.scale.y=0.3;
	sillaM4S4.scale.x=0.4;
	sillaM4S4.scale.z=0.6;
	sillaM4S4.position.y=-0.2;
	sillaM4S4.position.x=-3.92;
	sillaM4S4.position.z=2.5;
	sillaM4S4.rotation.z=1.5;
	//silla5
	var sillaM25=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM25.position.x=-3.7;
	sillaM25.position.z=4.1;
	sillaM25.scale.y=0.6;
	sillaM25.position.y=-0.4;
	var sillaM255=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM255.position.x=-3.7;
	sillaM255.position.z=4.6;
	sillaM255.scale.y=0.6;
	sillaM255.position.y=-0.4;
	var sillaM25T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM25T.position.x=-3.2;
	sillaM25T.position.z=4.1;
	sillaM25T.scale.y=0.6;
	sillaM25T.position.y=-0.4;
	var sillaM255T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM255T.position.x=-3.2;
	sillaM255T.position.z=4.6;
	sillaM255T.scale.y=0.6;
	sillaM255T.position.y=-0.4;
	var sillaM5S=new THREE.Mesh(cuadradopqueño,cafe);
	sillaM5S.scale.y=0.3;
	sillaM5S.scale.x=0.4;
	sillaM5S.scale.z=0.6;
	sillaM5S.position.y=-0.46;
	sillaM5S.position.x=-4.2;
	sillaM5S.position.z=3.5;
	var sillaM5S5=new THREE.Mesh(cuadradopqueño,cafe);
	sillaM5S5.scale.z=2;
	sillaM5S5.scale.y=0.3;
	sillaM5S5.scale.x=0.4;
	sillaM5S5.scale.z=0.6;
	sillaM5S5.position.y=-0.2;
	sillaM5S5.position.x=-3.92;
	sillaM5S5.position.z=3.5;
	sillaM5S5.rotation.z=1.5;
	//silla6
	var sillaM26=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM26.position.x=-3.7;
	sillaM26.position.z=5.1;
	sillaM26.scale.y=0.6;
	sillaM26.position.y=-0.4;
	var sillaM266=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM266.position.x=-3.7;
	sillaM266.position.z=5.6;
	sillaM266.scale.y=0.6;
	sillaM266.position.y=-0.4;
	var sillaM26T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM26T.position.x=-3.2;
	sillaM26T.position.z=5.1;
	sillaM26T.scale.y=0.6;
	sillaM26T.position.y=-0.4;
	var sillaM266T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM266T.position.x=-3.2;
	sillaM266T.position.z=5.6;
	sillaM266T.scale.y=0.6;
	sillaM266T.position.y=-0.4;
	var sillaM6S=new THREE.Mesh(cuadradopqueño,cafe);
	sillaM6S.scale.y=0.3;
	sillaM6S.scale.x=0.4;
	sillaM6S.scale.z=0.6;
	sillaM6S.position.y=-0.46;
	sillaM6S.position.x=-4.2;
	sillaM6S.position.z=4.5;
	var sillaM6S6=new THREE.Mesh(cuadradopqueño,cafe);
	sillaM6S6.scale.z=2;
	sillaM6S6.scale.y=0.3;
	sillaM6S6.scale.x=0.4;
	sillaM6S6.scale.z=0.6;
	sillaM6S6.position.y=-0.2;
	sillaM6S6.position.x=-3.92;
	sillaM6S6.position.z=4.5;
	sillaM6S6.rotation.z=1.5;


	//silla1 para la meesa3
	var sillaM31=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM31.position.x=5.2;
	sillaM31.position.z=-0.3;
	sillaM31.scale.y=0.6;
	sillaM31.position.y=-0.4;
	var sillaM311=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM311.position.x=5.2;
	sillaM311.position.z=0.2;
	sillaM311.scale.y=0.6;
	sillaM311.position.y=-0.4;
	var sillaM31T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM31T.position.x=4.7;
	sillaM31T.position.z=-0.3;
	sillaM31T.scale.y=0.6;
	sillaM31T.position.y=-0.4;
	var sillaM311T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM311T.position.x=4.7;
	sillaM311T.position.z=0.2;
	sillaM311T.scale.y=0.6;
	sillaM311T.position.y=-0.4;
	var sillaMML2S=new THREE.Mesh(cuadradopqueño,cafe);
	sillaMML2S.scale.y=0.3;
	sillaMML2S.scale.x=0.4;
	sillaMML2S.scale.z=0.6;
	sillaMML2S.position.y=-0.46;
	sillaMML2S.position.x=4.2;
	sillaMML2S.position.z=-0.9;
	var sillaMM2S1=new THREE.Mesh(cuadradopqueño,cafe);
	sillaMM2S1.scale.z=2;
	sillaMM2S1.scale.y=0.3;
	sillaMM2S1.scale.x=0.4;
	sillaMM2S1.scale.z=0.6;
	sillaMM2S1.position.y=-0.2;
	sillaMM2S1.position.x=3.90;
	sillaMM2S1.position.z=-0.9;
	sillaMM2S1.rotation.z=1.5;
	//silla2
	var sillaM32=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM32.position.x=5.2;
	sillaM32.position.z=0.7;
	sillaM32.scale.y=0.6;
	sillaM32.position.y=-0.4;
	var sillaM322=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM322.position.x=5.2;
	sillaM322.position.z=1.2;
	sillaM322.scale.y=0.6;
	sillaM322.position.y=-0.4;
	var sillaM32T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM32T.position.x=4.7;
	sillaM32T.position.z=0.7;
	sillaM32T.scale.y=0.6;
	sillaM32T.position.y=-0.4;
	var sillaM322T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM322T.position.x=4.7;
	sillaM322T.position.z=1.2;
	sillaM322T.scale.y=0.6;
	sillaM322T.position.y=-0.4;
	var sillaMM2S=new THREE.Mesh(cuadradopqueño,cafe);
	sillaMM2S.scale.y=0.3;
	sillaMM2S.scale.x=0.4;
	sillaMM2S.scale.z=0.6;
	sillaMM2S.position.y=-0.46;
	sillaMM2S.position.x=4.2;
	sillaMM2S.position.z=0.1;
	var sillaMM2S2=new THREE.Mesh(cuadradopqueño,cafe);
	sillaMM2S2.scale.y=0.3;
	sillaMM2S2.scale.x=0.4;
	sillaMM2S2.scale.z=0.6;
	sillaMM2S2.position.y=-0.2;
	sillaMM2S2.position.x=3.9;
	sillaMM2S2.position.z=0.1;
	sillaMM2S2.rotation.z=1.5;
	//silla3
	var sillaM33=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM33.position.x=5.2;
	sillaM33.position.z=2.1;
	sillaM33.scale.y=0.6;
	sillaM33.position.y=-0.4;
	var sillaM333=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM333.position.x=5.2;
	sillaM333.position.z=2.6;
	sillaM333.scale.y=0.6;
	sillaM333.position.y=-0.4;
	var sillaM33T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM33T.position.x=4.7;
	sillaM33T.position.z=2.1;
	sillaM33T.scale.y=0.6;
	sillaM33T.position.y=-0.4;
	var sillaM333T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM333T.position.x=4.7;
	sillaM333T.position.z=2.6;
	sillaM333T.scale.y=0.6;
	sillaM333T.position.y=-0.4;
	var sillaMM3S=new THREE.Mesh(cuadradopqueño,cafe);
	sillaMM3S.scale.y=0.3;
	sillaMM3S.scale.x=0.4;
	sillaMM3S.scale.z=0.6;
	sillaMM3S.position.y=-0.46;
	sillaMM3S.position.x=4.2;
	sillaMM3S.position.z=1.5;
	var sillaMM3S3=new THREE.Mesh(cuadradopqueño,cafe);
	sillaMM3S3.scale.z=2;
	sillaMM3S3.scale.y=0.3;
	sillaMM3S3.scale.x=0.4;
	sillaMM3S3.scale.z=0.6;
	sillaMM3S3.position.y=-0.2;
	sillaMM3S3.position.x=3.9;
	sillaMM3S3.position.z=1.5;
	sillaMM3S3.rotation.z=1.5;

	//silla4
	var sillaM34=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM34.position.x=5.2;
	sillaM34.position.z=3.1;
	sillaM34.scale.y=0.6;
	sillaM34.position.y=-0.4;
	var sillaM344=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM344.position.x=5.2;
	sillaM344.position.z=3.6;
	sillaM344.scale.y=0.6;
	sillaM344.position.y=-0.4;
	var sillaM34T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM34T.position.x=4.7;
	sillaM34T.position.z=3.1;
	sillaM34T.scale.y=0.6;
	sillaM34T.position.y=-0.4;
	var sillaM344T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM344T.position.x=4.7;
	sillaM344T.position.z=3.6;
	sillaM344T.scale.y=0.6;
	sillaM344T.position.y=-0.4;
	var sillaMM4S=new THREE.Mesh(cuadradopqueño,cafe);
	sillaMM4S.scale.y=0.3;
	sillaMM4S.scale.x=0.4;
	sillaMM4S.scale.z=0.6;
	sillaMM4S.position.y=-0.46;
	sillaMM4S.position.x=4.2;
	sillaMM4S.position.z=2.5;
	var sillaMM4S4=new THREE.Mesh(cuadradopqueño,cafe);
	sillaMM4S4.scale.z=2;
	sillaMM4S4.scale.y=0.3;
	sillaMM4S4.scale.x=0.4;
	sillaMM4S4.scale.z=0.6;
	sillaMM4S4.position.y=-0.2;
	sillaMM4S4.position.x=3.9;
	sillaMM4S4.position.z=2.5;
	sillaMM4S4.rotation.z=1.5;
	//silla5
	var sillaM35=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM35.position.x=5.2;
	sillaM35.position.z=4.1;
	sillaM35.scale.y=0.6;
	sillaM35.position.y=-0.4;
	var sillaM355=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM355.position.x=5.2;
	sillaM355.position.z=4.6;
	sillaM355.scale.y=0.6;
	sillaM355.position.y=-0.4;
	var sillaM35T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM35T.position.x=4.7;
	sillaM35T.position.z=4.1;
	sillaM35T.scale.y=0.6;
	sillaM35T.position.y=-0.4;
	var sillaM355T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM355T.position.x=4.7;
	sillaM355T.position.z=4.6;
	sillaM355T.scale.y=0.6;
	sillaM355T.position.y=-0.4;
	var sillaMM5S=new THREE.Mesh(cuadradopqueño,cafe);
	sillaMM5S.scale.y=0.3;
	sillaMM5S.scale.x=0.4;
	sillaMM5S.scale.z=0.6;
	sillaMM5S.position.y=-0.46;
	sillaMM5S.position.x=4.2;
	sillaMM5S.position.z=3.5;
	var sillaMM5S5=new THREE.Mesh(cuadradopqueño,cafe);
	sillaMM5S5.scale.z=2;
	sillaMM5S5.scale.y=0.3;
	sillaMM5S5.scale.x=0.4;
	sillaMM5S5.scale.z=0.6;
	sillaMM5S5.position.y=-0.2;
	sillaMM5S5.position.x=3.9;
	sillaMM5S5.position.z=3.5;
	sillaMM5S5.rotation.z=1.5;
	//silla6
	var sillaM36=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM36.position.x=5.2;
	sillaM36.position.z=5.1;
	sillaM36.scale.y=0.6;
	sillaM36.position.y=-0.4;
	var sillaM366=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM366.position.x=5.2;
	sillaM366.position.z=5.6;
	sillaM366.scale.y=0.6;
	sillaM366.position.y=-0.4;
	var sillaM36T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM36T.position.x=4.7;
	sillaM36T.position.z=5.1;
	sillaM36T.scale.y=0.6;
	sillaM36T.position.y=-0.4;
	var sillaM366T=new THREE.Mesh(cuadradolargo,cafeclaro);
	sillaM366T.position.x=4.7;
	sillaM366T.position.z=5.6;
	sillaM366T.scale.y=0.6;
	sillaM366T.position.y=-0.4;
	var sillaMM6S=new THREE.Mesh(cuadradopqueño,cafe);
	sillaMM6S.scale.y=0.3;
	sillaMM6S.scale.x=0.4;
	sillaMM6S.scale.z=0.6;
	sillaMM6S.position.y=-0.46;
	sillaMM6S.position.x=4.2;
	sillaMM6S.position.z=4.5;
	var sillaMM6S6=new THREE.Mesh(cuadradopqueño,cafe);
	sillaMM6S6.scale.z=2;
	sillaMM6S6.scale.y=0.3;
	sillaMM6S6.scale.x=0.4;
	sillaMM6S6.scale.z=0.6;
	sillaMM6S6.position.y=-0.2;
	sillaMM6S6.position.x=3.9;
	sillaMM6S6.position.z=4.5;
	sillaMM6S6.rotation.z=1.5;

	//pizarra
	var pizarra=new THREE.Mesh(cuadradopqueño,negro);
	pizarra.scale.x=3;
	pizarra.scale.y=0.3;
	pizarra.scale.z=2;
	pizarra.rotation.x=1.57;
	pizarra.position.z=-5.9;
	pizarra.position.y=-1.3;
	var pizarra1=new THREE.Mesh(cuadradopqueño,blanco);
	pizarra1.scale.x=3;
	pizarra1.scale.y=0.1;
	pizarra1.scale.z=1.89;
	pizarra1.rotation.x=1.57;
	pizarra1.position.z=-5.88;
	pizarra1.position.y=-1.21;
	//monitores 1
	var monitor=new THREE.Mesh(cuadradopqueño,negro);
	monitor.scale.y=0.3;
	monitor.scale.x=0.4;
	monitor.scale.z=0.6;
	monitor.position.y=0.5;
	monitor.position.x=-5;
	monitor.position.z=-0.9;
	monitor.rotation.z=1.5;
	var monitor0=new THREE.Mesh(cuadradolargo,negro);
	monitor0.scale.y=0.3;
	monitor0.scale.x=0.4;
	monitor0.scale.z=0.6;
	monitor0.position.y=0.3;
	monitor0.position.x=-4.7;
	monitor0.position.z=-0.65;
	var monitor00=new THREE.Mesh(cuadradolargo,negro);
	monitor00.scale.y=0.3;
	monitor00.scale.x=0.4;
	monitor00.scale.z=0.6;
	monitor00.position.y=-0.85;
	monitor00.position.x=-4.7;
	monitor00.position.z=-1.3;
	monitor00.rotation.x=1.5;
	//monito2
	var monitor1=new THREE.Mesh(cuadradopqueño,negro);
	monitor1.scale.y=0.3;
	monitor1.scale.x=0.4;
	monitor1.scale.z=0.6;
	monitor1.position.y=0.5;
	monitor1.position.x=-5;
	monitor1.position.z=0.1;
	monitor1.rotation.z=1.5;
	var monitor11p=new THREE.Mesh(cuadradolargo,negro);
	monitor11p.scale.y=0.3;
	monitor11p.scale.x=0.4;
	monitor11p.scale.z=0.6;
	monitor11p.position.y=0.3;
	monitor11p.position.x=-4.7;
	monitor11p.position.z=0.35;
	var monitor111p=new THREE.Mesh(cuadradolargo,negro);
	monitor111p.scale.y=0.3;
	monitor111p.scale.x=0.4;
	monitor111p.scale.z=0.6;
	monitor111p.position.y=-0.85;
	monitor111p.position.x=-4.7;
	monitor111p.position.z=-0.3;
	monitor111p.rotation.x=1.5;
	//monitor 3
	var monitor2=new THREE.Mesh(cuadradopqueño,negro);
	monitor2.scale.y=0.3;
	monitor2.scale.x=0.4;
	monitor2.scale.z=0.6;
	monitor2.position.y=0.5;
	monitor2.position.x=-5;
	monitor2.position.z=1.5;
	monitor2.rotation.z=1.5;
	var monitor22=new THREE.Mesh(cuadradolargo,negro);
	monitor22.scale.y=0.3;
	monitor22.scale.x=0.4;
	monitor22.scale.z=0.6;
	monitor22.position.y=0.3;
	monitor22.position.x=-4.7;
	monitor22.position.z=1.78;
	var monitor222=new THREE.Mesh(cuadradolargo,negro);
	monitor222.scale.y=0.3;
	monitor222.scale.x=0.4;
	monitor222.scale.z=0.6;
	monitor222.position.y=-0.85;
	monitor222.position.x=-4.7;
	monitor222.position.z=1.15;
	monitor222.rotation.x=1.5;
	//monitor4
	var monitor3=new THREE.Mesh(cuadradopqueño,negro);
	monitor3.scale.y=0.3;
	monitor3.scale.x=0.4;
	monitor3.scale.z=0.6;
	monitor3.position.y=0.5;
	monitor3.position.x=-5;
	monitor3.position.z=2.5;
	monitor3.rotation.z=1.5;
	var monitor33=new THREE.Mesh(cuadradolargo,negro);
	monitor33.scale.y=0.3;
	monitor33.scale.x=0.4;
	monitor33.scale.z=0.6;
	monitor33.position.y=0.3;
	monitor33.position.x=-4.7;
	monitor33.position.z=2.78;
	var monitor333=new THREE.Mesh(cuadradolargo,negro);
	monitor333.scale.y=0.3;
	monitor333.scale.x=0.4;
	monitor333.scale.z=0.6;
	monitor333.position.y=-0.85;
	monitor333.position.x=-4.7;
	monitor333.position.z=2.15;
	monitor333.rotation.x=1.5;
	//monitor 5
	var monitor4=new THREE.Mesh(cuadradopqueño,negro);
	monitor4.scale.y=0.3;
	monitor4.scale.x=0.4;
	monitor4.scale.z=0.6;
	monitor4.position.y=0.5;
	monitor4.position.x=-5;
	monitor4.position.z=3.5;
	monitor4.rotation.z=1.5;
	var monitor44=new THREE.Mesh(cuadradolargo,negro);
	monitor44.scale.y=0.3;
	monitor44.scale.x=0.4;
	monitor44.scale.z=0.6;
	monitor44.position.y=0.3;
	monitor44.position.x=-4.7;
	monitor44.position.z=3.75;
	var monitor444=new THREE.Mesh(cuadradolargo,negro);
	monitor444.scale.y=0.3;
	monitor444.scale.x=0.4;
	monitor444.scale.z=0.6;
	monitor444.position.y=-0.85;
	monitor444.position.x=-4.7;
	monitor444.position.z=3.11;
	monitor444.rotation.x=1.5;
	//monitor6
	var monitor5=new THREE.Mesh(cuadradopqueño,negro);
	monitor5.scale.y=0.3;
	monitor5.scale.x=0.4;
	monitor5.scale.z=0.6;
	monitor5.position.y=0.5;
	monitor5.position.x=-5;
	monitor5.position.z=4.5;
	monitor5.rotation.z=1.5;
	var monitor55=new THREE.Mesh(cuadradolargo,negro);
	monitor55.scale.y=0.3;
	monitor55.scale.x=0.4;
	monitor55.scale.z=0.6;
	monitor55.position.y=0.3;
	monitor55.position.x=-4.7;
	monitor55.position.z=4.75;
	var monitor555=new THREE.Mesh(cuadradolargo,negro);
	monitor555.scale.y=0.3;
	monitor555.scale.x=0.4;
	monitor555.scale.z=0.6;
	monitor555.position.y=-0.85;
	monitor555.position.x=-4.7;
	monitor555.position.z=4.11;
	monitor555.rotation.x=1.5;
	//monitor7
	var monitor6=new THREE.Mesh(cuadradopqueño,negro);
	monitor6.scale.y=0.3;
	monitor6.scale.x=0.4;
	monitor6.scale.z=0.6;
	monitor6.position.y=0.5;
	monitor6.position.x=5;
	monitor6.position.z=-0.9;
	monitor6.rotation.z=1.5;
	var monitor66=new THREE.Mesh(cuadradolargo,negro);
	monitor66.scale.y=0.3;
	monitor66.scale.x=0.4;
	monitor66.scale.z=0.6;
	monitor66.position.y=0.3;
	monitor66.position.x=5.3;
	monitor66.position.z=-0.65;
	var monitor666=new THREE.Mesh(cuadradolargo,negro);
	monitor666.scale.y=0.3;
	monitor666.scale.x=0.4;
	monitor666.scale.z=0.6;
	monitor666.position.y=-0.85;
	monitor666.position.x=5.3;
	monitor666.position.z=-1.3;
	monitor666.rotation.x=1.5;
	//monitor 8
	var monitor7=new THREE.Mesh(cuadradopqueño,negro);
	monitor7.scale.y=0.3;
	monitor7.scale.x=0.4;
	monitor7.scale.z=0.6;
	monitor7.position.y=0.5;
	monitor7.position.x=5;
	monitor7.position.z=0.1;
	monitor7.rotation.z=1.5;
	var monitor77=new THREE.Mesh(cuadradolargo,negro);
	monitor77.scale.y=0.3;
	monitor77.scale.x=0.4;
	monitor77.scale.z=0.6;
	monitor77.position.y=0.3;
	monitor77.position.x=5.3;
	monitor77.position.z=0.35;
	var monitor777=new THREE.Mesh(cuadradolargo,negro);
	monitor777.scale.y=0.3;
	monitor777.scale.x=0.4;
	monitor777.scale.z=0.6;
	monitor777.position.y=-0.85;
	monitor777.position.x=5.3;
	monitor777.position.z=-0.3;
	monitor777.rotation.x=1.5;
	//monitor9
	var monitor8=new THREE.Mesh(cuadradopqueño,negro);
	monitor8.scale.y=0.3;
	monitor8.scale.x=0.4;
	monitor8.scale.z=0.6;
	monitor8.position.y=0.5;
	monitor8.position.x=5;
	monitor8.position.z=1.5;
	monitor8.rotation.z=1.5;
	var monitor88=new THREE.Mesh(cuadradolargo,negro);
	monitor88.scale.y=0.3;
	monitor88.scale.x=0.4;
	monitor88.scale.z=0.6;
	monitor88.position.y=0.3;
	monitor88.position.x=5.3;
	monitor88.position.z=1.78;
	var monitor888=new THREE.Mesh(cuadradolargo,negro);
	monitor888.scale.y=0.3;
	monitor888.scale.x=0.4;
	monitor888.scale.z=0.6;
	monitor888.position.y=-0.85;
	monitor888.position.x=5.3;
	monitor888.position.z=1.15;
	monitor888.rotation.x=1.5;
	//monitor10
	var monitor9=new THREE.Mesh(cuadradopqueño,negro);
	monitor9.scale.y=0.3;
	monitor9.scale.x=0.4;
	monitor9.scale.z=0.6;
	monitor9.position.y=0.5;
	monitor9.position.x=5;
	monitor9.position.z=2.5;
	monitor9.rotation.z=1.5;
	var monitor99=new THREE.Mesh(cuadradolargo,negro);
	monitor99.scale.y=0.3;
	monitor99.scale.x=0.4;
	monitor99.scale.z=0.6;
	monitor99.position.y=0.3;
	monitor99.position.x=5.3;
	monitor99.position.z=2.78;
	var monitor999=new THREE.Mesh(cuadradolargo,negro);
	monitor999.scale.y=0.3;
	monitor999.scale.x=0.4;
	monitor999.scale.z=0.6;
	monitor999.position.y=-0.85;
	monitor999.position.x=5.3;
	monitor999.position.z=2.15;
	monitor999.rotation.x=1.5;
	//monitor11
	var monitor10=new THREE.Mesh(cuadradopqueño,negro);
	monitor10.scale.y=0.3;
	monitor10.scale.x=0.4;
	monitor10.scale.z=0.6;
	monitor10.position.y=0.5;
	monitor10.position.x=5;
	monitor10.position.z=3.5;
	monitor10.rotation.z=1.5;
	var monitor101=new THREE.Mesh(cuadradolargo,negro);
	monitor101.scale.y=0.3;
	monitor101.scale.x=0.4;
	monitor101.scale.z=0.6;
	monitor101.position.y=0.3;
	monitor101.position.x=5.3;
	monitor101.position.z=3.75;
	var monitor1011=new THREE.Mesh(cuadradolargo,negro);
	monitor1011.scale.y=0.3;
	monitor1011.scale.x=0.4;
	monitor1011.scale.z=0.6;
	monitor1011.position.y=-0.85;
	monitor1011.position.x=5.3;
	monitor1011.position.z=3.11;
	monitor1011.rotation.x=1.5;
	//moniotr12
	var monitor11=new THREE.Mesh(cuadradopqueño,negro);
	monitor11.scale.y=0.3;
	monitor11.scale.x=0.4;
	monitor11.scale.z=0.6;
	monitor11.position.y=0.5;
	monitor11.position.x=5;
	monitor11.position.z=4.5;
	monitor11.rotation.z=1.5;
	var monitor111=new THREE.Mesh(cuadradolargo,negro);
	monitor111.scale.y=0.3;
	monitor111.scale.x=0.4;
	monitor111.scale.z=0.6;
	monitor111.position.y=0.3;
	monitor111.position.x=5.3;
	monitor111.position.z=4.75;
	var monitor1111=new THREE.Mesh(cuadradolargo,negro);
	monitor1111.scale.y=0.3;
	monitor1111.scale.x=0.4;
	monitor1111.scale.z=0.6;
	monitor1111.position.y=-0.85;
	monitor1111.position.x=5.3;
	monitor1111.position.z=4.11;
	monitor1111.rotation.x=1.5;

	//teclados1
	var teclado1=new THREE.Mesh(cuadradopqueño,plomooscuro);
	teclado1.position.y=0.05;
	teclado1.position.x=-4.6;
	teclado1.position.z=-0.85;
	teclado1.scale.z=0.7;
	teclado1.scale.x=0.2;
	teclado1.scale.y=0.2;
	//teclado2
	var teclado2=new THREE.Mesh(cuadradopqueño,plomooscuro);
	teclado2.position.y=0.05;
	teclado2.position.x=-4.6;
	teclado2.position.z=0.15;
	teclado2.scale.z=0.7;
	teclado2.scale.x=0.2;
	teclado2.scale.y=0.2;
	//teclado3
	var teclado3=new THREE.Mesh(cuadradopqueño,plomooscuro);
	teclado3.position.y=0.05;
	teclado3.position.x=-4.6;
	teclado3.position.z=1.65;
	teclado3.scale.z=0.7;
	teclado3.scale.x=0.2;
	teclado3.scale.y=0.2;
	//tecaldo4
	var teclado4=new THREE.Mesh(cuadradopqueño,plomooscuro);
	teclado4.position.y=0.05;
	teclado4.position.x=-4.6;
	teclado4.position.z=2.65;
	teclado4.scale.z=0.7;
	teclado4.scale.x=0.2;
	teclado4.scale.y=0.2;
	//tecaldo5
	var teclado5=new THREE.Mesh(cuadradopqueño,plomooscuro);
	teclado5.position.y=0.05;
	teclado5.position.x=-4.6;
	teclado5.position.z=3.65;
	teclado5.scale.z=0.7;
	teclado5.scale.x=0.2;
	teclado5.scale.y=0.2;
	//teclado6
	var teclado6=new THREE.Mesh(cuadradopqueño,plomooscuro);
	teclado6.position.y=0.05;
	teclado6.position.x=-4.6;
	teclado6.position.z=4.65;
	teclado6.scale.z=0.7;
	teclado6.scale.x=0.2;
	teclado6.scale.y=0.2;

	//teclado7
	var teclado7=new THREE.Mesh(cuadradopqueño,plomooscuro);
	teclado7.position.y=0.05;
	teclado7.position.x=4.6;
	teclado7.position.z=-0.85;
	teclado7.scale.z=0.7;
	teclado7.scale.x=0.2;
	teclado7.scale.y=0.2;
	//teclado8
	var teclado8=new THREE.Mesh(cuadradopqueño,plomooscuro);
	teclado8.position.y=0.05;
	teclado8.position.x=4.6;
	teclado8.position.z=0.15;
	teclado8.scale.z=0.7;
	teclado8.scale.x=0.2;
	teclado8.scale.y=0.2;
	//teclado9
	var teclado9=new THREE.Mesh(cuadradopqueño,plomooscuro);
	teclado9.position.y=0.05;
	teclado9.position.x=4.6;
	teclado9.position.z=1.65;
	teclado9.scale.z=0.7;
	teclado9.scale.x=0.2;
	teclado9.scale.y=0.2;
	//teclado10
	var teclado10=new THREE.Mesh(cuadradopqueño,plomooscuro);
	teclado10.position.y=0.05;
	teclado10.position.x=4.6;
	teclado10.position.z=2.65;
	teclado10.scale.z=0.7;
	teclado10.scale.x=0.2;
	teclado10.scale.y=0.2;
	//teclado11
	var teclado11=new THREE.Mesh(cuadradopqueño,plomooscuro);
	teclado11.position.y=0.05;
	teclado11.position.x=4.6;
	teclado11.position.z=3.65;
	teclado11.scale.z=0.7;
	teclado11.scale.x=0.2;
	teclado11.scale.y=0.2;
	//teclado12
	var teclado12=new THREE.Mesh(cuadradopqueño,plomooscuro);
	teclado12.position.y=0.05;
	teclado12.position.x=4.6;
	teclado12.position.z=4.65;
	teclado12.scale.z=0.7;
	teclado12.scale.x=0.2;
	teclado12.scale.y=0.2;
	//ESFERA
	var esf=new THREE.SphereGeometry(0.07,8,5);
	//mouse1
	var mouse1 = new THREE.Mesh(esf,azuloscuro);
	mouse1.position.x=-4.6;
	mouse1.position.y=0.02;
	mouse1.position.z=-2.1;
	//mouse2
	var mouse2 = new THREE.Mesh(esf,azuloscuro);
	mouse2.position.x=-4.6;
	mouse2.position.y=0.02;
	mouse2.position.z=-1.0;
	//mouse3
	var mouse3 = new THREE.Mesh(esf,azuloscuro);
	mouse3.position.x=-4.6;
	mouse3.position.y=0.02;
	mouse3.position.z=0.4;
	//mouse4
	var mouse4 = new THREE.Mesh(esf,azuloscuro);
	mouse4.position.x=-4.6;
	mouse4.position.y=0.02;
	mouse4.position.z=1.45;
	//mouse5
	var mouse5 = new THREE.Mesh(esf,azuloscuro);
	mouse5.position.x=-4.6;
	mouse5.position.y=0.02;
	mouse5.position.z=2.4;
	//mouse6
	var mouse6 = new THREE.Mesh(esf,azuloscuro);
	mouse6.position.x=-4.6;
	mouse6.position.y=0.02;
	mouse6.position.z=3.45;
	//mouse7
	var mouse7 = new THREE.Mesh(esf,azuloscuro);
	mouse7.position.x=4.6;
	mouse7.position.y=0.02;
	mouse7.position.z=-2.1;
	//mouse8
	var mouse8 = new THREE.Mesh(esf,azuloscuro);
	mouse8.position.x=4.6;
	mouse8.position.y=0.02;
	mouse8.position.z=-1.0;
	//mouse9
	var mouse9 = new THREE.Mesh(esf,azuloscuro);
	mouse9.position.x=4.6;
	mouse9.position.y=0.02;
	mouse9.position.z=0.4;
	//mouse10
	var mouse10 = new THREE.Mesh(esf,azuloscuro);
	mouse10.position.x=4.6;
	mouse10.position.y=0.02;
	mouse10.position.z=1.45;
	//mouse11
	var mouse11 = new THREE.Mesh(esf,azuloscuro);
	mouse11.position.x=4.6;
	mouse11.position.y=0.02;
	mouse11.position.z=2.4;
	//mouse12
	var mouse12 = new THREE.Mesh(esf,azuloscuro);
	mouse12.position.x=4.6;
	mouse12.position.y=0.02;
	mouse12.position.z=3.45;
	//pc1
	var pc1=new THREE.Mesh(cuadradopqueño,plomooscuro);
	pc1.scale.y=4;
	pc1.scale.x=0.3;
	pc1.scale.z=0.4;
	pc1.position.y=0.7;
	pc1.position.x=-5.5;
	pc1.position.z=-1.5;
	//pc2
	var pc2=new THREE.Mesh(cuadradopqueño,plomooscuro);
	pc2.scale.y=4;
	pc2.scale.x=0.3;
	pc2.scale.z=0.4;
	pc2.position.y=0.7;
	pc2.position.x=-5.5;
	pc2.position.z=-0.5;
	//pc3
	var pc3=new THREE.Mesh(cuadradopqueño,plomooscuro);
	pc3.scale.y=4;
	pc3.scale.x=0.3;
	pc3.scale.z=0.4;
	pc3.position.y=0.7;
	pc3.position.x=-5.5;
	pc3.position.z=0.8;
	//pc4
	var pc4=new THREE.Mesh(cuadradopqueño,plomooscuro);
	pc4.scale.y=4;
	pc4.scale.x=0.3;
	pc4.scale.z=0.4;
	pc4.position.y=0.7;
	pc4.position.x=-5.5;
	pc4.position.z=1.8;
	//pc5
	var pc5=new THREE.Mesh(cuadradopqueño,plomooscuro);
	pc5.scale.y=4;
	pc5.scale.x=0.3;
	pc5.scale.z=0.4;
	pc5.position.y=0.7;
	pc5.position.x=-5.5;
	pc5.position.z=2.8;
	//pc6
	var pc6=new THREE.Mesh(cuadradopqueño,plomooscuro);
	pc6.scale.y=4;
	pc6.scale.x=0.3;
	pc6.scale.z=0.4;
	pc6.position.y=0.7;
	pc6.position.x=-5.5;
	pc6.position.z=3.8;
	//pc7
	var pc7=new THREE.Mesh(cuadradopqueño,plomooscuro);
	pc7.scale.y=4;
	pc7.scale.x=0.3;
	pc7.scale.z=0.4;
	pc7.position.y=0.7;
	pc7.position.x=5.5;
	pc7.position.z=-1.5;
	//pc8
	var pc8=new THREE.Mesh(cuadradopqueño,plomooscuro);
	pc8.scale.y=4;
	pc8.scale.x=0.3;
	pc8.scale.z=0.4;
	pc8.position.y=0.7;
	pc8.position.x=5.5;
	pc8.position.z=-0.5;
	//pc9
	var pc9=new THREE.Mesh(cuadradopqueño,plomooscuro);
	pc9.scale.y=4;
	pc9.scale.x=0.3;
	pc9.scale.z=0.4;
	pc9.position.y=0.7;
	pc9.position.x=5.5;
	pc9.position.z=0.8;
	//pc10
	var pc10=new THREE.Mesh(cuadradopqueño,plomooscuro);
	pc10.scale.y=4;
	pc10.scale.x=0.3;
	pc10.scale.z=0.4;
	pc10.position.y=0.7;
	pc10.position.x=5.5;
	pc10.position.z=1.8;
	//pc11
	var pc11=new THREE.Mesh(cuadradopqueño,plomooscuro);
	pc11.scale.y=4;
	pc11.scale.x=0.3;
	pc11.scale.z=0.4;
	pc11.position.y=0.7;
	pc11.position.x=5.5;
	pc11.position.z=2.8;
	//pc12
	var pc12=new THREE.Mesh(cuadradopqueño,plomooscuro);
	pc12.scale.y=4;
	pc12.scale.x=0.3;
	pc12.scale.z=0.4;
	pc12.position.y=0.7;
	pc12.position.x=5.5;
	pc12.position.z=3.8;
	//ESFERA1
	var esf1=new THREE.SphereGeometry(0.04,8,5);
	//botones1
	var boton1 = new THREE.Mesh(esf1,rojo);
	boton1.position.x=-5.28;
	boton1.position.y=0.5;
	boton1.position.z=-2.0;
	//botones2
	var boton2 = new THREE.Mesh(esf1,rojo);
	boton2.position.x=-5.28;
	boton2.position.y=0.5;
	boton2.position.z=-1.0;
	//botones3
	var boton3 = new THREE.Mesh(esf1,rojo);
	boton3.position.x=-5.28;
	boton3.position.y=0.5;
	boton3.position.z=0.3;
	//botones4
	var boton4 = new THREE.Mesh(esf1,rojo);
	boton4.position.x=-5.28;
	boton4.position.y=0.5;
	boton4.position.z=1.3;
	//botones5
	var boton5 = new THREE.Mesh(esf1,rojo);
	boton5.position.x=-5.28;
	boton5.position.y=0.5;
	boton5.position.z=2.3;
	//botones6
	var boton6 = new THREE.Mesh(esf1,rojo);
	boton6.position.x=-5.28;
	boton6.position.y=0.5;
	boton6.position.z=3.3;
	//botones7
	var boton7 = new THREE.Mesh(esf1,rojo);
	boton7.position.x=5.28;
	boton7.position.y=0.5;
	boton7.position.z=-2.0;
	//botones8
	var boton8 = new THREE.Mesh(esf1,rojo);
	boton8.position.x=5.28;
	boton8.position.y=0.5;
	boton8.position.z=-1.0;
	//botones9
	var boton9 = new THREE.Mesh(esf1,rojo);
	boton9.position.x=5.28;
	boton9.position.y=0.5;
	boton9.position.z=0.3;
	//botones10
	var boton10 = new THREE.Mesh(esf1,rojo);
	boton10.position.x=5.28;
	boton10.position.y=0.5;
	boton10.position.z=1.3;
	//botones11
	var boton11 = new THREE.Mesh(esf1,rojo);
	boton11.position.x=5.28;
	boton11.position.y=0.5;
	boton11.position.z=2.3;
	//botones12
	var boton12 = new THREE.Mesh(esf1,rojo);
	boton12.position.x=5.28;
	boton12.position.y=0.5;
	boton12.position.z=3.3;

	// SCENE
	scene = new THREE.Scene();
	scene.add( light );
	scene.add( ambientLight );
	//botones
	scene.add(boton1);
	scene.add(boton2);
	scene.add(boton3);
	scene.add(boton4);
	scene.add(boton5);
	scene.add(boton6);
	scene.add(boton7);
	scene.add(boton8);
	scene.add(boton9);
	scene.add(boton10);
	scene.add(boton11);
	scene.add(boton12);
	//pcs
	scene.add(pc1);
	scene.add(pc2);
	scene.add(pc3);
	scene.add(pc4);
	scene.add(pc5);
	scene.add(pc6);
	scene.add(pc7);
	scene.add(pc8);
	scene.add(pc9);
	scene.add(pc10);
	scene.add(pc11);
	scene.add(pc12);
	//mouse
	scene.add(mouse1);
	scene.add(mouse2);
	scene.add(mouse3);
	scene.add(mouse4);
	scene.add(mouse5);
	scene.add(mouse6);
	scene.add(mouse7);
	scene.add(mouse8);
	scene.add(mouse9);
	scene.add(mouse10);
	scene.add(mouse11);
	scene.add(mouse12);
	//teclados
	scene.add(teclado1);
	scene.add(teclado2);
	scene.add(teclado3);
	scene.add(teclado4);
	scene.add(teclado5);
	scene.add(teclado6);
	scene.add(teclado7);
	scene.add(teclado8);
	scene.add(teclado9);
	scene.add(teclado10);
	scene.add(teclado11);
	scene.add(teclado12);
	//monitor
	scene.add(monitor);
	scene.add(monitor0);
	scene.add(monitor00);
	scene.add(monitor1);
	scene.add(monitor11p);
	scene.add(monitor111p);
	scene.add(monitor2);
	scene.add(monitor22);
	scene.add(monitor222);
	scene.add(monitor3);
	scene.add(monitor33);
	scene.add(monitor333);
	scene.add(monitor4);
	scene.add(monitor44);
	scene.add(monitor444);
	scene.add(monitor5);
	scene.add(monitor55);
	scene.add(monitor555);
	scene.add(monitor6);
	scene.add(monitor66);
	scene.add(monitor666);
	scene.add(monitor7);
	scene.add(monitor77);
	scene.add(monitor777);
	scene.add(monitor8);
	scene.add(monitor88);
	scene.add(monitor888);
	scene.add(monitor9);
	scene.add(monitor99);
	scene.add(monitor999);
	scene.add(monitor10);
	scene.add(monitor101);
	scene.add(monitor1011);
	scene.add(monitor11);
	scene.add(monitor111);
	scene.add(monitor1111);
	scene.add(piso);
	scene.add(techo);
	scene.add(pared1);
	scene.add(pared2);
	scene.add(pared3);
	scene.add(pared4);
	scene.add(mesa);
	scene.add(mesa01);
	scene.add(mesa02);
	scene.add(mesa03);
	scene.add(mesa04);
	scene.add(mesa05);
	scene.add(mesa06);
	scene.add(mesa07);
	scene.add(mesa08);
	scene.add(mesa1);
	scene.add(mesa11);
	scene.add(mesa12);
	scene.add(mesa13);
	scene.add(mesa14);
	scene.add(mesa15);
	scene.add(mesa16);
	scene.add(mesa17);
	scene.add(mesa18);
	scene.add(mesa2);
	scene.add(mesa21);
	scene.add(mesa22);
	scene.add(mesa23);
	scene.add(mesa24);
	scene.add(mesa25);
	scene.add(mesa26);
	scene.add(mesa27);
	scene.add(mesa28);
	scene.add(mesa3);
	scene.add(mesa31);
	scene.add(pizarra);
	scene.add(pizarra1);
	//silla
	scene.add(silla1);
	scene.add(silla11);
	scene.add(silla1T);
	scene.add(silla1T1);
	scene.add(silla1S);
	scene.add(silla1S1);

	scene.add(silla2);
	scene.add(silla22);
	scene.add(silla2T);
	scene.add(silla2T2);
	scene.add(silla2S);
	scene.add(silla2S2);

	scene.add(silla3);
	scene.add(silla33);
	scene.add(silla3T);
	scene.add(silla3T3);
	scene.add(silla3S);
	scene.add(silla3S3);

	scene.add(silla4);
	scene.add(silla44);
	scene.add(silla4T);
	scene.add(silla4T4);
	scene.add(silla4S);
	scene.add(silla4S4);

	scene.add(silla5);
	scene.add(silla55);
	scene.add(silla5T);
	scene.add(silla5T5);
	scene.add(silla5S);
	scene.add(silla5S5);

	scene.add(silla6);
	scene.add(silla66);
	scene.add(silla6T);
	scene.add(silla6T6);
	scene.add(silla6S);
	scene.add(silla6S6);

	scene.add(silla7);
	scene.add(silla77);
	scene.add(silla7T);
	scene.add(silla7T7);
	scene.add(silla7S);
	scene.add(silla7S7);

	scene.add(silla8);
	scene.add(silla88);
	scene.add(silla8T);
	scene.add(silla8T8);
	scene.add(silla8S);
	scene.add(silla8S8);

	scene.add(silla9);
	scene.add(silla99);
	scene.add(silla9T);
	scene.add(silla9T9);
	scene.add(silla9S);
	scene.add(silla9S9);

	scene.add(silla10);
	scene.add(silla1010);
	scene.add(silla10T);
	scene.add(silla10T10);
	scene.add(silla10S);
	scene.add(silla10S10);

	scene.add(silla111);
	scene.add(silla11111);
	scene.add(silla11T);
	scene.add(silla11T11);
	scene.add(silla11S);
	scene.add(silla11S11);

	scene.add(silla12);
	scene.add(silla1212);
	scene.add(silla12T);
	scene.add(silla12T12);
	scene.add(silla12S);
	scene.add(silla12S12);

//SILLA MESA2
	scene.add(sillaM21);
	scene.add(sillaM211);
	scene.add(sillaM21T);
	scene.add(sillaM211T);
	scene.add(sillaML2S);
	scene.add(sillaM2S1);

	scene.add(sillaM22);
	scene.add(sillaM222);
	scene.add(sillaM22T);
	scene.add(sillaM222T);
	scene.add(sillaM2S);
	scene.add(sillaM2S2);

	scene.add(sillaM23);
	scene.add(sillaM233);
	scene.add(sillaM23T);
	scene.add(sillaM233T);
	scene.add(sillaM3S);
	scene.add(sillaM3S3);

	scene.add(sillaM24);
	scene.add(sillaM244);
	scene.add(sillaM24T);
	scene.add(sillaM244T);
	scene.add(sillaM4S);
	scene.add(sillaM4S4);

	scene.add(sillaM25);
	scene.add(sillaM255);
	scene.add(sillaM25T);
	scene.add(sillaM255T);
	scene.add(sillaM5S);
	scene.add(sillaM5S5);

	scene.add(sillaM26);
	scene.add(sillaM266);
	scene.add(sillaM26T);
	scene.add(sillaM266T);
	scene.add(sillaM6S);
	scene.add(sillaM6S6);
//SILLA MESA3
	scene.add(sillaM31);
	scene.add(sillaM311);
	scene.add(sillaM31T);
	scene.add(sillaM311T);
	scene.add(sillaMML2S);
	scene.add(sillaMM2S1);
	
	scene.add(sillaM32);
	scene.add(sillaM322);
	scene.add(sillaM32T);
	scene.add(sillaM322T);
	scene.add(sillaMM2S);
	scene.add(sillaMM2S2);

	scene.add(sillaM33);
	scene.add(sillaM333);
	scene.add(sillaM33T);
	scene.add(sillaM333T);
	scene.add(sillaMM3S);
	scene.add(sillaMM3S3);

	scene.add(sillaM34);
	scene.add(sillaM344);
	scene.add(sillaM34T);
	scene.add(sillaM344T);
	scene.add(sillaMM4S);
	scene.add(sillaMM4S4);

	scene.add(sillaM35);
	scene.add(sillaM355);
	scene.add(sillaM35T);
	scene.add(sillaM355T);
	scene.add(sillaMM5S);
	scene.add(sillaMM5S5);

	scene.add(sillaM36);
	scene.add(sillaM366);
	scene.add(sillaM36T);
	scene.add(sillaM366T);
	scene.add(sillaMM6S);
	scene.add(sillaMM6S6);

}

function animate() {
	window.requestAnimationFrame( animate );
	if(camera.position.x>2){
		camera.position.x=2;
	}
	if(camera.position.x<-2){
		camera.position.x=-2;
	}
	if(camera.position.z>5){
		camera.position.z=5;
	}
	if(camera.position.z<-5){
		camera.position.z=-5;
	}
	if(camera.position.y>1){
		camera.position.y=1;
	}
	if(camera.position.y<0.0){
		camera.position.y=0.0;
	}
	
 
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}


try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}
