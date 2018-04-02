

function runTest(){
	canvas.width=900
	canvas.height=900
	const renderer = new Renderer(300,300)
	const scene = new Scene('demo0')


	const s1 = new Sphere()
	s1.material = new Material(Color.WHITE,Color.BLUE,Color.WHITE)
	s1.material.shininess = 100
	s1.translate(new Vector3(0,0,0))
		.scale(new Vector3(3,3,3))
	scene.addObject(s1)

	s2 = new Sphere()
	s2.translate(new Vector3(2,2,-12))
		.scale(new Vector3(3,4,2))
	s2.material = new Material(Color.WHITE,Color.GREEN,Color.WHITE)
	s2.material.shininess = 500
	scene.addObject(s2)

	s3 = new Sphere()
	s3.translate(new Vector3(-10,5,-12)).scale(new Vector3(3,3,3))
	s3.material = new Material(Color.WHITE,Color.WHITE,Color.WHITE)
	s3.material.shininess = 5
	scene.addObject(s3)

	const camera = new Camera()
	camera.position = new Vector3(0,20,10)
	camera.lookAt(s1.position)

	const light1 = new Light(new Vector3(10,10,-10))
	light1.ambientColor = Color.WHITE.scale(0.1)
	light1.diffuseColor = Color.WHITE
	light1.specularColor = Color.WHITE
	light1.intensity = 0.5
	scene.addLight(light1)

	const light2 = new Light(new Vector3(-10,10,20))
	light2.intensity = 0.5
	light2.ambientColor = Color.WHITE.scale(0.1)
	light2.diffuseColor = Color.RED
	light2.specularColor = Color.BLUE
	scene.addLight(light2)

	renderer.render(scene,camera)
}

runTest()
