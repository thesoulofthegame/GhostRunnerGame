#pragma strict

	
public var speed : int = 2;
 
 function Update () {

         if (Input.GetKey (KeyCode.UpArrow)){ 
         	this.transform.Translate (Vector3(0,1,0) * Time.deltaTime*speed);
        }
        if (Input.GetKey (KeyCode.LeftArrow)){ 
         	this.transform.Translate (Vector3(-1,0,0) * Time.deltaTime*speed);
         }
         if (Input.GetKey (KeyCode.RightArrow)){ 
         	this.transform.Translate (Vector3(1,0,0) * Time.deltaTime*speed);
         }
         if (Input.GetKey (KeyCode.DownArrow)){ 
         	this.transform.Translate (Vector3(0,-1,0) * Time.deltaTime*speed);
         }
 }

function OnTriggerEnter (other : Collider) {
	Debug.Log("Hello");
	Destroy(other.gameObject);
}