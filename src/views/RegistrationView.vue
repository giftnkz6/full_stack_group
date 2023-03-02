<template>
    <div>
        <div class="card">
            <h4 class="title">Register!</h4>
            <form>
                <div class="field">
                  <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                    </svg>
                  <input type="firstname" placeholder="Firstname" class="input-field">
                </div>
                <div class="field">
                    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                      </svg>
                  <input  type="lastname" placeholder="Lastname" class="input-field">
                </div>
                <div class="field">
                    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
                      </svg>
                  <input  type="digits" placeholder="Cellphone Number" class="input-field">
                </div>
                <div class="field">
                    <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                      </svg>
                      <select id="inputState" class="form-select" required>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                </div>
              <div class="field" width>
                <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                  </svg>
                <input type="email" placeholder="Email" class="input-field" >
            </div>
              <div class="field">
                <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                  </svg>
                <input type="password" placeholder="Password" class="input-field">
              </div>
              <div class="field">
                <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                  </svg>
                <input type="password" placeholder="Confirm Password" class="input-field">
              </div>
              <div class="field">
                <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                  </svg>
                <input type="url" placeholder="imageUrl" class="input-field">
              </div>
              <!-- <button class="btn" type="submit">Register</button> -->
              <div class="btn" type="submit">
                <div class="box">R</div>
                <div class="box">E</div>
                <div class="box">G</div>
                <div class="box">I</div>
                <div class="box">S</div>
                <div class="box">T</div>
                <div class="box">E</div>
                <div class="box">R</div>
            </div>
              <a href="#" class="btn-link">Register with Google</a>
            </form>
          </div>
    </div>
</template>

<style>
.card {
    width: 190px;
    padding: 1.9rem 1.2rem;
    text-align: center;
    background: #ffffff;
    margin-top: 20px;
    margin-left: 287px;
    box-shadow: 0 0 15px #14134A;

   }


.field {
    margin-top: 0.55rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5em;
    background-color: #14134A;
    border-radius: 4px;
    padding: .5em 1em;
   }
   
.input-icon {
    height: 1em;
    width: 1em;
    fill: #A300FF;
   }
   
.input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #f4f4f4;
   }
   
.title {
    margin-bottom: 1rem;
    font-size: 1.5em;
    font-weight: 500;
    color: #14134A;
   }
   
/*
.btn {
    margin: 1rem;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: .8em;
    text-transform: uppercase;
    padding: 0.6em 1.2em;
    background-color:#14134A;
    color: #A300FF;
    box-shadow: 0 0 20px #14134A;
    transition: all .3s ease-in-out;
}
   
.btn-link {
    color: #14134A;
    display: block;
    font-size: .75em;
    transition: color .3s ease-out;
}

.btn:hover {
  background-color: #A300FF;
  color: #14134A;
  box-shadow: 0 8px 24px 0 rgb(16 39 112 / 20%);
}
 
.btn-link:hover {
  color:#A300FF;
}
*/
.btn {
  display: flex;
}

.box {
  width: 35px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  transition: all .8s;
  cursor: pointer;
  position: relative;
  background: rgb(58, 165, 253);
  overflow: hidden;
}

.box:before {
  content: "D";
  position: absolute;
  top: 0;
  background: #0f0f0f;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);
  transition: transform .4s;
}

.box:nth-child(2)::before {
  transform: translateY(-100%);
  content: 'O';
}

.box:nth-child(3)::before {
  content: '-';
}

.box:nth-child(4)::before {
  transform: translateY(-100%);
  content: 'I';
}

.box:nth-child(5)::before {
  content: 'T';
}

.button:hover .box:before {
  transform: translateY(0);
}
   
</style>