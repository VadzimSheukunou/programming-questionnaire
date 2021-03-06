import React from 'react';
import history from 'store/history';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles';

/**
 * Table component for list of questionaries
 * Click on the name to go to the question with answers
 * @param {Array} data - data of all questioniers array of objects with keys: name, description and id
 * @param {Function} selectQuestionary - function for the select current questionary and set it value to the redux
 * @param {Object} classes - material ui styles
 */

const TableComponent = ({ data, selectQuestionary, classes }) => {
  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Quiz name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map(row => (
              <TableRow key={row.id}>
                <TableCell
                  component="th"
                  scope="row"
                  onClick={() => {
                    selectQuestionary(row);
                    history.push(`/${row.id}/question`);
                  }}
                >
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">Completed</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default withStyles(styles)(TableComponent);
