import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, IconButton, Box } from '@mui/material';
import { Delete } from '@mui/icons-material';

const TableDrugstore = () => {
  const [pharmacies, setPharmacies] = useState([]);

  // Function to delete a pharmacy
  const handleDeletePharmacy = (id) => {
    fetch(`http://localhost:3310/drugstore?id=${id}`, {method: 'DELETE'})
    .then(response => {
      if (response.ok) {
        const copyPharmacies = [...pharmacies]
        setPharmacies(copyPharmacies.filter(pharmacy => pharmacy.id !== id))
      }

    })
    .catch(error => console.log("Il y a eu un problème avec l'opération fetch: " + error))
  };

  // Function to get all pharmacies
  useEffect(() => {
    fetch(`http://localhost:3310/drugstore?latitude=48.856614&longitude=2.3522219`)
      .then(response => response.json())
      .then(data => setPharmacies(data));
  }, []);


  return (
    <div >
    <Box sx={{mx: 50, mt: 10}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell>Adresse</TableCell>
            <TableCell>Distance</TableCell>
            <TableCell>Supprimer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pharmacies.map(pharmacy => (
            <TableRow key={pharmacy.id}>
              <TableCell>{pharmacy.name}</TableCell>
              <TableCell>{pharmacy.address}</TableCell>
              <TableCell>&lt; {pharmacy.distance.toFixed(1)} km</TableCell>
              <TableCell>
                <IconButton onClick={() => handleDeletePharmacy(pharmacy.id)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
    </div>
  );
};

export default TableDrugstore;