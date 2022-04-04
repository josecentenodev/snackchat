      // Ejemplo de llamada a la base de datos con un boton
      // const bringData = document.getElementById("bringData").addEventListener('click', () => {
      //   bringAllTheData();
      // })
      
      // const bringAllTheData = () => {
      //   onValue(refTexts, (snap)=>{
      //     const data = snap.val();
      //     console.log(data)
      //   })
      // }
      //!!!!

      // Lista de metodos de firebase
      // onValue renderiza analogamente como useEffect, trae todos los valores de la referencia
      // onValue(refTexts, (snap)=>{
      //     const data = snap.val();
      //     console.log("onValue: ", data)})
      // 
      // // onChildAdded, ejecuta cuando se agrega un elemento a la bd
      //   onChildAdded(refMSGs, (snap)=>{
      //     let data = snap.val()
      //     console.log("onChildAdded: ", data)
      //   })
      //   // onChildChanged, ejecuta cuando cambia un elemento
      //   onChildChanged(refMSGs, (snap)=>{
      //     let data = snap.val()
      //     console.log("onChildChanged: ", data)
      //   })
      //   // onChildRemoved, ejecuta cuando se elimina un elemento
      //   onChildRemoved(refMSGs, (snap)=>{
      //     let data = snap.val()
      //     console.log("onChildRemoved: ", data)
      //   })
        // Ordenar datos por orden
        //  onChildAdded(queryMensajes, (snap)=>{
        //    let data = snap.val()
        //    console.log("queryMensajes: ", data)
        //  })