import { v4 as uuidv4 } from 'uuid';
import Sequelize from 'sequelize';

const answer = (sequelize, DataTypes) => {
  const Answer = sequelize.define('answer', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: () => uuidv4()
    },
    content: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      field: 'content',
      allowNull: false
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      field: 'is_correct',
      allowNull: false
    },
    questionId: {
      type: Sequelize.UUID,
      field: 'question_id',
      onDelete: 'CASCADE',
      references: {
        model: 'questions',
        key: 'id',
        as: 'questionId'
      }
    }
  });

  Answer.associate = (models) => {
    Answer.belongsTo(models.Question, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });
  };

  return Answer;
};

export default answer;
