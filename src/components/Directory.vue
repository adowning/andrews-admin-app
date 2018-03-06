<template>
  <div id="Employees" >
<q-layout >
	<q-page-container>
    <q-page padding class="row justify-center ">
			<q-card inline style="width: 500px">
  <q-card-media>
    <img src="~assets/donuts.png">
  </q-card-media>
  <q-card-title>
    Cafe Basilico
    <q-rating slot="subtitle" v-model="stars" :max="5" />
    <div slot="right" class="row items-center">
      <q-icon name="place" /> 250 ft
    </div>
  </q-card-title>
  <q-card-main>
    <p>$・Italian, Cafe</p>
    <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
  </q-card-main>
  <q-card-separator />
  <q-card-actions>
    <q-btn flat round dense icon="event" />
    <q-btn flat label="5:30PM" />
    <q-btn flat label="7:30PM" />
    <q-btn flat label="9:00PM" />
    <q-btn flat color="primary" label="Reserve" />
  </q-card-actions>
</q-card>
        
  </div>
</template>

<script>
// import firebase from "firebase"
import firebase from "./firebaseInit"
import "firebase/firestore"
import "firebase/storage"

const db = firebase.firestore()
const storageRef = firebase.storage().ref()
const imagesRef = storageRef.child("home")

export default {
	name: "Directory",
	data() {
		return {
			valid: true,
			photosToUpload: [],
			homePhotos: [],
			postPhotos: [],
			tableHeaders: [
				{ text: "preview", value: "url" },
				{ text: "Position", value: "position" },
				{ text: "name", value: "name" },
				{ text: "path", value: "path" },
				{ text: "options", value: "options", sortable: false },
			],
			selectedPath: "",
			folders: [
				{ text: "Gallery", value: "homePhotos" },
				{ text: "Reviews", value: "postPhotos" },
			],
			uploadProgress: null,
			uploadOn: false,
			previewOn: false,
			photoPreview: null,
			uploadDialog: false,
			previewDialog: false,
			positionDialog: false,
			currentPhoto: {
				id: null,
				name: null,
				path: null,
				url: null,
				position: null,
			},
		}
	},

	methods: {
		listPhotos() {
			console.log(db)
			this.homePhotos = []
			this.postPhotos = []
			db
				.collection("homePhotos")
				.orderBy("position")
				.get()
				.then(querySnapshot => {
					querySnapshot.forEach(doc => {
						console.log("photos")

						const homePhoto = {
							id: doc.id,
							name: doc.data().name,
							path: doc.data().path,
							url: doc.data().url,
							position: doc.data().position,
						}
						this.homePhotos.push(homePhoto)
						console.log("photos", homePhoto.position)
					})
				})
				.catch(function(error) {
					// Handle Errors here.
					var errorCode = error.code
					var errorMessage = error.message
					console.log(errorMessage)
				})
		},
		processFiles(event) {
			this.photosToUpload = event.target.files
		},
		uploadPhotos() {
			this.uploadOn = true
			const ref = "homePhotos"
			Array.from(this.photosToUpload).forEach(photo => {
				var uploadTask = storageRef
					.child(ref + "/" + photo.name)
					.put(photo)
				// Register three observers:
				// 1. 'state_changed' observer, called any time the state changes
				// 2. Error observer, called on failure
				// 3. Completion observer, called on successful completion
				uploadTask.on(
					"state_changed",
					function(snapshot) {
						// Observe state change events such as progress, pause, and resume
						// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
						this.uploadProgress = parseInt(
							snapshot.bytesTransferred /
								snapshot.totalBytes *
								100,
						)
						console.log(
							"Upload is " + this.uploadProgress + "% done",
						)
					},
					error => {
						// Handle unsuccessful uploads
					},
					() => {
						// Handle successful uploads on complete
						// For instance, get the download URL: https://firebasestorage.googleapis.com/...
						console.log("snapshot", uploadTask.snapshot)
						var downloadURL = uploadTask.snapshot.downloadURL
						// Add a new document with a generated id.
						var photoObj = {
							url: downloadURL,
							path: ref + "/" + photo.name,
							name: photo.name,
						}
						db
							.collection(ref)
							.add(photoObj)
							.then(docRef => {
								this.listPhotos()
								console.log(
									"Document written with ID: ",
									docRef.id,
								)
							})
							.catch(error => {
								console.error("Error adding document: ", error)
							})
					},
				)
				this.uploadOn = false
				this.uploadDialog = false
				this.photosToUpload = []
			})
		},
		cancelUpload() {
			this.uploadDialog = false
			this.photosToUpload = []
		},
		positionPhoto(photo, collection) {
			const docRef = db.collection(collection).doc(photo.id)
			docRef
				.set({
					id: photo.id,
					name: photo.name,
					path: photo.path,
					url: photo.url,
					position: photo.position,
				})
				.then(doc => {
					this.cancelPosition()
				})
				.catch(() => {
					console.error("Error editing document: ", error)
				})
		},
		cancelPosition() {
			this.positionDialog = false
			this.currentPhoto = {
				id: null,
				name: null,
				path: null,
				url: null,
				position: null,
			}
		},
		startPosition(photo) {
			this.positionDialog = true
			this.currentPhoto = photo
		},
		deletePhoto(photo, collection) {
			if (confirm("Are you sure?")) {
				var desertRef = storageRef.child(photo.path)
				// Delete the file
				desertRef
					.delete()
					.then(function() {
						// File deleted successfully
					})
					.catch(function(error) {
						// Uh-oh, an error occurred!
					})
				db
					.collection(collection)
					.doc(photo.id)
					.delete()
					.then(data => {
						this.listPhotos()
						console.log("Document successfully deleted!")
					})
					.catch(error => {
						console.error("Error removing document: ", error)
					})
			}
		},
		openPreview() {
			this.previewDialog = true
		},
		closePreview() {
			this.previewDialog = false
		},
	},
	created() {
		this.listPhotos()
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Gallery {
	height: 100%;
}
.fit {
	max-width: 100%;
}
.preview {
	width: 300px;
	max-width: 100vw;
}
@media only screen and (max-width: 900px) {
	.preview {
		width: 100px;
		max-width: 100vw;
	}
}
.pointer {
	cursor: pointer;
}
</style>
