import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

class PlayerRepository {
  constructor(app) {
    this.db = getDatabase(app);
  }

  syncCards(userId, onUpdate) {
    const query = ref(this.db, `${userId}/players`);
    onValue(query, (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });

    return () => off(query);
  }

  saveCard(userId, player) {
    set(ref(this.db, `${userId}/players/${player.id}`), player);
  }

  removeCard(userId, player) {
    remove(ref(this.db, `${userId}/players/${player.id}`), player);
  }
}

export default PlayerRepository;
