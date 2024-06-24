for (let index = 0; index < 11; index++) {
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        if (agent.inspect(AgentInspection.Block, RIGHT) != STONE) {
            agent.destroy(RIGHT)
        }
        agent.move(UP, 1)
    }
    agent.move(DOWN, 2)
}
