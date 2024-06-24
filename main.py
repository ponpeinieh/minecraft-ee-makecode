for index in range(11):
    agent.move(FORWARD, 1)
    for index2 in range(3):
        if agent.inspect(AgentInspection.BLOCK, RIGHT) != STONE:
            agent.destroy(RIGHT)
        agent.move(UP, 1)
    agent.move(DOWN, 2)