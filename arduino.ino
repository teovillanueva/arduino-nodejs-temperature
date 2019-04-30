int tmp;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  tmp = analogRead(A0);

  float temp = ( tmp/1024.0)*5000; 
  
  temp = temp/10;

  Serial.println(temp);
  delay(500);
}
