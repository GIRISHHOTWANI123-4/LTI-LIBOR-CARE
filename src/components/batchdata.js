import React, {useEffect} from "react";
import axios from 'axios';
import Header from "../shared/header";
// https://cors-anywhere.herokuapp.com

const Batchdata = () => {

    useEffect(() => {
        async function fetchData() {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("grant_type", "password");
            urlencoded.append("client_id", "keycloak-gatekeeper");
            urlencoded.append("client_secret", "f6b31aeb-740c-4939-8922-d01d8fd9fa74");
            urlencoded.append("username", "sanchit");
            urlencoded.append("password", "e10adc3949ba59abbe56e057f20f883e");

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };
          let value="";
          await  fetch("https://mosaiclogin.lntinfotech.com/auth/realms/mosaic/protocol/openid-connect/token", requestOptions)
                .then(response => response.json())
                .then(result => value=(result))
                .catch(error => console.log('error', error));

            console.log("Value = ",value.access_token);

            var myHeaders1 = new Headers();
            myHeaders1.append("Content-Type", "application/json");
            myHeaders1.append("Authorization", "Bearer " +value.access_token);

            var requestOptions1 = {
                method: 'GET',
                headers: myHeaders1,
                redirect: 'follow'
            };

            var config = {
                method: 'get',
                url: 'https://livmosaic.lntinfotech.com/entityextractor-backend/batch/get_batch_list?solution_id=389',
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJWRzlRQjF3NEQzdWpucnUwdExkemFxMTltWXdHZ3JINFR3Z0tiZUFjb2lZIn0.eyJleHAiOjE2MDc1OTQ5MDIsImlhdCI6MTYwNzU5NDYwMiwianRpIjoiNWRjZmMzYjktMjhmYi00YTg3LTlmNTEtNWVhYzQxN2VjM2NhIiwiaXNzIjoiaHR0cHM6Ly9tb3NhaWNsb2dpbi5sbnRpbmZvdGVjaC5jb20vYXV0aC9yZWFsbXMvbW9zYWljIiwiYXVkIjoia2V5Y2xvYWstZ2F0ZWtlZXBlciIsInN1YiI6IjM1NGRhOTA3LWY4MDItNDQ3Zi1iOTBjLWM2ZjJhOTYxYzM3NyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImtleWNsb2FrLWdhdGVrZWVwZXIiLCJzZXNzaW9uX3N0YXRlIjoiNjJmMjczZmEtMGUyYy00NDgxLTk5ZTctMmUxNTI4YTEzYzRiIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJTRV9MMSJdfSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJyb2xlcyI6WyJTRV9MMSJdLCJuYW1lIjoic2FuY2hpdCIsImdyb3VwcyI6WyIvbW9zYWljL2NhdGFsb2dfZGF0YV9jaXRpemVuIiwiL0xlbnNfRGV2ZWxvcGVyIiwiL21vc2FpYyIsIi9tb3NhaWMvbW9zYWljLWFpLWxvZ2lzdGljcyIsIi9tb3NhaWMtYWlvcHMiLCIvbW9zYWljL21vc2FpYy1lZWYiLCIvbW9zYWljL21vc2FpYy1sZW5zIiwiL21vc2FpYy9tb3NhaWMtbm90ZWJvb2tzIiwiL01vc2FpY19EZWNpc2lvbnMiLCIvTW9zYWljX0RlY2lzaW9uc19EZXZlbG9wZXIiLCIvTW9zYWljX0RlY2lzaW9uc19PcGVyYXRvciIsIi9NT1NBSUNfRUVGX1NVIiwiL21vc2FpY190ZXN0X3JvbGVfYWNjZXNzX21hbmFnZW1lbnQiXSwicHJlZmVycmVkX3VzZXJuYW1lIjoic2FuY2hpdCIsImdpdmVuX25hbWUiOiJzYW5jaGl0In0.jLTSnfdzAKqYaTPaHiDGeVV-nFuK_W2RsPGfDt3Y3F5sh7vERUpjOyf-GCo3PDDtF8HMMEjO8VTTMSJFm4WoSLuBL1OcqIPdttIDeRMzClPqb_YHEZy_U0aNyGRaay3-s-HTdJMIy0NvkWhbs5zT6jJhY3ypF7eKNp02XMCrdGurNmlVm_Rokt-7zKWPJNFXKanQ4nLjOb-8dp32tn3PIu1kZA8PB2FU9q8DEm-XLo0S4NZWq2kk3OELtAItKD0haioT2a33XeWwTnzdWR0jxGe-AdwLHcLHUlNNoQbV-OzU7gmWRepjeL53SaSZFcSk1N1rwEfMnVfABv4sVCoFQw'
                }
            };

            await  fetch("https://livmosaic.lntinfotech.com/entityextractor-backend/batch/get_batch_list?solution_id=389", requestOptions1)
                .then(response => response.json())
                .then(result => console.log("Result= ",result))
                .catch(error => console.log('error', error));



        }

        fetchData();
    }, [])
    return (
        <div>
            <Header/>
            <h1>
                Libor Data
            </h1>
        </div>
    )
}


export default Batchdata;
