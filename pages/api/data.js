// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getFirestore, collection, getDocs } from 'firebase/firestore'
import firebaseApp from '../../lib/firebaseApp'

const db = getFirestore(firebaseApp)

export default function handler(req, res) {
  async function getData() {
    var data = []
    const querySnapshot = await getDocs(collection(db, 'startup'))
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data())
      const x = doc.data()
      x.id = doc.id
      data.push(x)
    })
    res.status(200).json({ startups: data })
  }
  getData()
}
